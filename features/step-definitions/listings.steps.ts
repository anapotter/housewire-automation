import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';

Then('user should see listings page heading', async function (this: ICustomWorld) {
  await expect(this.listingsPage!.pageHeading).toBeVisible();
});

Then('user should see multiple properties listed', async function (this: ICustomWorld) {
  const count = await this.listingsPage!.getPropertyCount();
  expect(count).toBeGreaterThan(0);
});

Then('user should see at least {int} properties listed', async function (this: ICustomWorld, minCount: number) {
  const count = await this.listingsPage!.getPropertyCount();
  expect(count).toBeGreaterThanOrEqual(minCount);
});

When('user clicks on property at index {int}', async function (this: ICustomWorld, index: number) {
  await this.listingsPage!.clickPropertyByIndex(index);
});

Then('user should see property prices', async function (this: ICustomWorld) {
  const price = await this.listingsPage!.getPropertyPrice(0);
  expect(price).toBeTruthy();
});

Then('user should see property addresses', async function (this: ICustomWorld) {
  const address = await this.listingsPage!.getPropertyAddress(0);
  expect(address).toBeTruthy();
});

When('user clicks home link', async function (this: ICustomWorld) {
  await this.listingsPage!.clickElement(this.listingsPage!.homeLink);
});
