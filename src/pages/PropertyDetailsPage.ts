import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PropertyDetailsPage extends BasePage {
  readonly propertyTitle: Locator;
  readonly askingPrice: Locator;
  readonly bedrooms: Locator;
  readonly bathrooms: Locator;
  readonly garage: Locator;
  readonly squareFeet: Locator;
  readonly lotSize: Locator;
  readonly listingDate: Locator;
  readonly realtor: Locator;
  readonly description: Locator;
  readonly propertyImages: Locator;
  readonly makeInquiryButton: Locator;
  readonly backToListingsLink: Locator;
  readonly realtorSection: Locator;

  constructor(page: Page) {
    super(page);
    this.propertyTitle = page.locator('h1');
    this.askingPrice = page.locator('text=/Asking Price/');
    this.bedrooms = page.locator('text=/Bedrooms:/');
    this.bathrooms = page.locator('text=/Bathrooms:/');
    this.garage = page.locator('text=/Garage:/');
    this.squareFeet = page.locator('text=/Square Feet:/');
    this.lotSize = page.locator('text=/Lot Size:/');
    this.listingDate = page.locator('text=/Listing Date:/');
    this.realtor = page.locator('text=/Realtor:/');
    this.description = page.locator('p');
    this.propertyImages = page.locator('img, a[href*="media"]');
    this.makeInquiryButton = page.locator('button:has-text("Make An Inquiry"), a:has-text("Make An Inquiry")');
    this.backToListingsLink = page.locator('a:has-text("Back To Listings")');
    this.realtorSection = page.locator('h5:has-text("Property Realtor")');
  }

  async getPropertyTitle(): Promise<string> {
    return await this.getElementText(this.propertyTitle);
  }

  async getAskingPrice(): Promise<string> {
    return await this.getElementText(this.askingPrice);
  }

  async getBedrooms(): Promise<string> {
    return await this.getElementText(this.bedrooms);
  }

  async getImageCount(): Promise<number> {
    return await this.propertyImages.count();
  }

  async clickBackToListings(): Promise<void> {
    await this.clickElement(this.backToListingsLink);
  }
}
