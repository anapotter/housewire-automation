import { Before, After, Status } from '@cucumber/cucumber';
import { ICustomWorld } from './world';

Before(async function (this: ICustomWorld) {
  await this.initBrowser();
});

After(async function (this: ICustomWorld, { result }) {
  if (result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  await this.closeBrowser();
});
