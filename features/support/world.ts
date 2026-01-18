import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ListingsPage } from '../../src/pages/ListingsPage';
import { PropertyDetailsPage } from '../../src/pages/PropertyDetailsPage';
import { AboutPage } from '../../src/pages/AboutPage';

export interface ICustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  homePage?: HomePage;
  listingsPage?: ListingsPage;
  propertyDetailsPage?: PropertyDetailsPage;
  aboutPage?: AboutPage;
  initBrowser(): Promise<void>;
  closeBrowser(): Promise<void>;
}

export class CustomWorld extends World implements ICustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  homePage?: HomePage;
  listingsPage?: ListingsPage;
  propertyDetailsPage?: PropertyDetailsPage;
  aboutPage?: AboutPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async initBrowser(): Promise<void> {
    this.browser = await chromium.launch({ 
      headless: process.env.HEADLESS !== 'false',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    this.page = await this.context.newPage();
    
    this.homePage = new HomePage(this.page);
    this.listingsPage = new ListingsPage(this.page);
    this.propertyDetailsPage = new PropertyDetailsPage(this.page);
    this.aboutPage = new AboutPage(this.page);
  }

  async closeBrowser(): Promise<void> {
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
