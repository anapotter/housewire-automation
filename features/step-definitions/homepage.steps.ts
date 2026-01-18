import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';

Then('user should see hero heading', async function (this: ICustomWorld) {
  await expect(this.homePage!.heroHeading).toBeVisible();
});

Then('user should see latest listings section', async function (this: ICustomWorld) {
  await expect(this.homePage!.latestListingsSection).toBeVisible();
});

Then('user should see consulting services section', async function (this: ICustomWorld) {
  await expect(this.homePage!.consultingServicesSection).toBeVisible();
});

Then('user should see property management section', async function (this: ICustomWorld) {
  await expect(this.homePage!.propertyManagementSection).toBeVisible();
});

Then('user should see renting and selling section', async function (this: ICustomWorld) {
  await expect(this.homePage!.rentingSellingSection).toBeVisible();
});

Then('user should see contact phone number', async function (this: ICustomWorld) {
  await expect(this.homePage!.phoneNumber).toBeVisible();
});

Then('user should see contact email', async function (this: ICustomWorld) {
  await expect(this.homePage!.emailAddress).toBeVisible();
});

Then('user should see copyright information', async function (this: ICustomWorld) {
  await expect(this.homePage!.copyrightText).toBeVisible();
});

Then('user should see at least {int} properties', async function (this: ICustomWorld, count: number) {
  const propertyCount = await this.homePage!.getPropertyCount();
  expect(propertyCount).toBeGreaterThanOrEqual(count);
});

When('user clicks on first property more info link', async function (this: ICustomWorld) {
  await this.homePage!.clickMoreInfo(0);
});

Then('user should see search form', async function (this: ICustomWorld) {
  await expect(this.homePage!.keywordsInput).toBeVisible();
});

When('user searches for properties with keywords {string}', async function (this: ICustomWorld, keywords: string) {
  await this.homePage!.searchProperties(keywords);
});

When('user searches for properties in city {string}', async function (this: ICustomWorld, city: string) {
  await this.homePage!.searchProperties(undefined, city);
});

When('user searches for properties with {string} bedrooms', async function (this: ICustomWorld, bedrooms: string) {
  await this.homePage!.searchProperties(undefined, undefined, undefined, bedrooms);
});
