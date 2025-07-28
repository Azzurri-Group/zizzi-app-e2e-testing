// src/e2e/support/global.d.ts
declare namespace Detox {
  interface JestExpect extends jest.Matchers<void> {
    toBeVisible(): void;
    toExist(): void;
    toHaveText(text: string): void;
    toHaveId(id: string): void;
    toHaveLabel(label: string): void;
    toHaveValue(value: string): void;
  }
}

declare const device: Detox.Device;
declare const element: Detox.IndexableNativeElement;
declare const by: Detox.By;
declare const expect: Detox.Expect<Detox.JestExpect>;