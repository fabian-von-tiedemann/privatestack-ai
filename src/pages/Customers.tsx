import { PageHeader } from '../components/PageHeader';
import { CustomerCases } from '../components/customers/CustomerCases';

export function Customers() {
  return (
    <main>
      <PageHeader
        title="Kunder"
        description="Se hur våra kunder använder privatestack.ai för att bygga säkra AI-lösningar"
      />

      <CustomerCases />
    </main>
  );
}