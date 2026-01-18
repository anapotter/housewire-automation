import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';

Then('user should see property title', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.propertyTitle).toBeVisible();
});

Then('user should see property asking price', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.askingPrice).toBeVisible();
});

Then('user should see property bedrooms', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.bedrooms).toBeVisible();
});

Then('user should see property bathrooms', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.bathrooms).toBeVisible();
});

Then('user should see property garage information', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.garage).toBeVisible();
});

Then('user should see property square feet', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.squareFeet).toBeVisible();
});

Then('user should see property lot size', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.lotSize).toBeVisible();
});

Then('user should see property listing date', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.listingDate).toBeVisible();
});

Then('user should see property realtor information', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.realtor).toBeVisible();
});

Then('user should see property images', async function (this: ICustomWorld) {
  const imageCount = await this.propertyDetailsPage!.getImageCount();
  expect(imageCount).toBeGreaterThan(0);
});

Then('user should see back to listings link', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.backToListingsLink).toBeVisible();
});

Then('user should see realtor section', async function (this: ICustomWorld) {
  await expect(this.propertyDetailsPage!.realtorSection).toBeVisible();
});

When('user clicks back to listings', async function (this: ICustomWorld) {
  await this.propertyDetailsPage!.clickBackToListings();
});
