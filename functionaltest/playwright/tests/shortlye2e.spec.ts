import { test, expect } from '@playwright/test';

test('ShortlyNews website', async ({ page }) => {
  await page.goto('https://shortlynews.com/');
  await page.getByRole('link', { name: 'Shortly News' }).nth(1).click();
  await page.getByRole('link', { name: 'Entertainment' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'World News' }).click();
  await page.getByRole('link', { name: 'Technology' }).click();
  await page.getByRole('link', { name: 'Shortly News' }).nth(1).click();
});
