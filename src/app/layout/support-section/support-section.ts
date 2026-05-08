import { Component, computed, signal } from '@angular/core';

type Frequency = 'once' | 'monthly';

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.html',
})
export class SupportSectionComponent {
  protected readonly amount = signal<number>(15);
  protected readonly frequency = signal<Frequency>('once');
  protected readonly customAmount = signal<string>('');

  protected readonly summary = computed(() => {
    const a = this.amount();
    if (!a || a <= 0) return '—';
    return `$${a} ${this.frequency() === 'monthly' ? '/ mo' : 'once'}`;
  });

  protected readonly donateUrl = computed(() => {
    if (this.frequency() === 'monthly') {
      return 'https://github.com/sponsors/andreascaue';
    }
    const a = this.amount();
    if (!a || a <= 0) return 'https://paypal.me/andreasmagalhaes';
    return `https://paypal.me/andreasmagalhaes/${a}`;
  });

  protected readonly presetAmounts = [
    { value: 5, label: 'a coffee' },
    { value: 15, label: 'a book' },
    { value: 50, label: 'a weekend' },
  ] as const;

  selectAmount(value: number) {
    this.amount.set(value);
    this.customAmount.set('');
  }

  onCustomInput(event: Event) {
    const raw = (event.target as HTMLInputElement).value;
    this.customAmount.set(raw);
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed) && parsed > 0) {
      this.amount.set(parsed);
    }
  }

  selectFrequency(value: Frequency) {
    this.frequency.set(value);
  }

  isCustomActive(): boolean {
    const c = this.customAmount();
    return c !== '' && !this.presetAmounts.some(p => String(p.value) === c);
  }

  isPresetActive(value: number): boolean {
    return this.amount() === value && !this.isCustomActive();
  }

}
