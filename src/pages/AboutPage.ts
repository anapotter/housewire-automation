import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutPage extends BasePage {
  readonly pageHeading: Locator;
  readonly tagline: Locator;
  readonly sellerOfTheMonthSection: Locator;
  readonly sellerName: Locator;
  readonly ourTeamSection: Locator;
  readonly teamMembers: Locator;
  readonly viewListingsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.locator('h1:has-text("About Hous Wire")');
    this.tagline = page.locator('h2:has-text("We Search For The Perfect Home")');
    this.sellerOfTheMonthSection = page.locator('h5:has-text("Seller Of The Month")');
    this.sellerName = page.locator('h6:has-text("Jenny Johnson")');
    this.ourTeamSection = page.locator('h2:has-text("Our Team")');
    this.teamMembers = page.locator('h4');
    this.viewListingsLink = page.locator('a:has-text("View Our Featured Listings")');
  }

  async open(): Promise<void> {
    await this.navigateTo('/about');
  }

  async getTeamMemberCount(): Promise<number> {
    return await this.teamMembers.count();
  }

  async clickViewListings(): Promise<void> {
    await this.clickElement(this.viewListingsLink);
  }
}
