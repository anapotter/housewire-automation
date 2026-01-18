import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';

Given('user has homepage opened', async function (this: ICustomWorld) {
  await this.homePage!.open();
  await this.homePage!.waitForPageLoad();
});

Given('user navigates to homepage', async function (this: ICustomWorld) {
  await this.homePage!.open();
  await this.homePage!.waitForPageLoad();
});

Given('user has listings page opened', async function (this: ICustomWorld) {
  await this.listingsPage!.open();
  await this.listingsPage!.waitForPageLoad();
});

Given('user navigates to listings page', async function (this: ICustomWorld) {
  await this.listingsPage!.open();
  await this.listingsPage!.waitForPageLoad();
});

Given('user has about page opened', async function (this: ICustomWorld) {
  await this.aboutPage!.open();
  await this.aboutPage!.waitForPageLoad();
});

Given('user navigates to about page', async function (this: ICustomWorld) {
  await this.aboutPage!.open();
  await this.aboutPage!.waitForPageLoad();
});

When('user waits for {int} seconds', async function (this: ICustomWorld, seconds: number) {
  await this.page!.waitForTimeout(seconds * 1000);
});

Then('user should see page title containing {string}', async function (this: ICustomWorld, expectedTitle: string) {
  const title = await this.page!.title();
  expect(title).toContain(expectedTitle);
});

Then('user should be on {string} page', async function (this: ICustomWorld, pageName: string) {
  const url = this.page!.url();
  expect(url).toContain(pageName.toLowerCase());
});
