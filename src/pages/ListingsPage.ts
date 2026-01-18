import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ListingsPage extends BasePage {
  readonly pageHeading: Locator;
  readonly propertyCards: Locator;
  readonly propertyAddresses: Locator;
  readonly propertyPrices: Locator;
  readonly moreInfoLinks: Locator;
  readonly homeLink: Locator;
  readonly backToListingsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.locator('h1:has-text("Browse Our Properties")');
    this.propertyCards = page.locator('a:has-text("More Info")');
    this.propertyAddresses = page.locator('h4');
    this.propertyPrices = page.locator('h2').filter({ hasText: /\$/ });
    this.moreInfoLinks = page.locator('a:has-text("More Info")');
    this.homeLink = page.locator('a.nav-link:has-text("Home")').first();
    this.backToListingsLink = page.locator('a:has-text("Back To Listings")');
  }

  async open(): Promise<void> {
    await this.navigateTo('/listings');
  }

  async getPropertyCount(): Promise<number> {
    return await this.propertyCards.count();
  }

  async clickPropertyByIndex(index: number): Promise<void> {
    await this.moreInfoLinks.nth(index).click();
  }

  async getPropertyPrice(index: number): Promise<string> {
    const price = await this.propertyPrices.nth(index).textContent();
    return price || '';
  }

  async getPropertyAddress(index: number): Promise<string> {
    const address = await this.propertyAddresses.nth(index).textContent();
    return address || '';
  }
}
