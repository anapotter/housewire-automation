import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heroHeading: Locator;
  readonly keywordsInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly bedroomsInput: Locator;
  readonly submitButton: Locator;
  readonly latestListingsSection: Locator;
  readonly propertyCards: Locator;
  readonly consultingServicesSection: Locator;
  readonly propertyManagementSection: Locator;
  readonly rentingSellingSection: Locator;
  readonly phoneNumber: Locator;
  readonly emailAddress: Locator;
  readonly copyrightText: Locator;

  constructor(page: Page) {
    super(page);
    this.heroHeading = page.locator('h1:has-text("Property Searching Just Got So Easy")');
    this.keywordsInput = page.locator('input[name="keywords"], input[placeholder*="Keywords"]');
    this.cityInput = page.locator('input[name="city"], input[placeholder*="City"]');
    this.stateInput = page.locator('input[name="state"], select[name="state"]');
    this.bedroomsInput = page.locator('input[name="bedrooms"], select[name="bedrooms"]');
    this.submitButton = page.locator('button[type="submit"], input[type="submit"]');
    this.latestListingsSection = page.locator('h3:has-text("Latest Listings")');
    this.propertyCards = page.locator('a:has-text("More Info")');
    this.consultingServicesSection = page.locator('h3:has-text("Consulting Services")');
    this.propertyManagementSection = page.locator('h3:has-text("Propery Management")');
    this.rentingSellingSection = page.locator('h3:has-text("Renting & Selling")');
    this.phoneNumber = page.locator('text=(617)-555-5555');
    this.emailAddress = page.locator('text=info@houswire.com');
    this.copyrightText = page.locator('text=Copyright © 2026 HOUS WIRE');
  }

  async open(): Promise<void> {
    await this.navigateTo('/');
  }

  async searchProperties(keywords?: string, city?: string, state?: string, bedrooms?: string): Promise<void> {
    if (keywords) await this.fillField(this.keywordsInput, keywords);
    if (city) await this.fillField(this.cityInput, city);
    if (state) await this.fillField(this.stateInput, state);
    if (bedrooms) await this.fillField(this.bedroomsInput, bedrooms);
    await this.clickElement(this.submitButton);
  }

  async getPropertyCount(): Promise<number> {
    return await this.propertyCards.count();
  }

  async clickMoreInfo(index: number = 0): Promise<void> {
    const moreInfoLinks = this.page.locator('a:has-text("More Info")');
    await moreInfoLinks.nth(index).click();
  }
}
