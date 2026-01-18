import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';

Then('user should see about page heading', async function (this: ICustomWorld) {
  await expect(this.aboutPage!.pageHeading).toBeVisible();
});

Then('user should see tagline', async function (this: ICustomWorld) {
  await expect(this.aboutPage!.tagline).toBeVisible();
});

Then('user should see seller of the month section', async function (this: ICustomWorld) {
  await expect(this.aboutPage!.sellerOfTheMonthSection).toBeVisible();
});

Then('user should see seller name', async function (this: ICustomWorld) {
  await expect(this.aboutPage!.sellerName).toBeVisible();
});

Then('user should see our team section', async function (this: ICustomWorld) {
  await expect(this.aboutPage!.ourTeamSection).toBeVisible();
});

Then('user should see team members', async function (this: ICustomWorld) {
  const count = await this.aboutPage!.getTeamMemberCount();
  expect(count).toBeGreaterThan(0);
});

Then('user should see at least {int} team members', async function (this: ICustomWorld, minCount: number) {
  const count = await this.aboutPage!.getTeamMemberCount();
  expect(count).toBeGreaterThanOrEqual(minCount);
});

When('user clicks view featured listings link', async function (this: ICustomWorld) {
  await this.aboutPage!.clickViewListings();
});
