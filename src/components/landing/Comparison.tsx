import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonData = {
  features: [
    { feature: "Portability", massagewave: true, competitorA: true, competitorB: false },
    { feature: "Soothing Heat", massagewave: true, competitorA: true, competitorB: true },
    { feature: "TENS Technology", massagewave: true, competitorA: false, competitorB: false },
    { feature: "Massage Modes", massagewave: "6", competitorA: "3", competitorB: "4" },
    { feature: "Battery Life", massagewave: "8 hours", competitorA: "4 hours", competitorB: "6 hours" },
    { feature: "Quiet Operation", massagewave: true, competitorA: false, competitorB: true },
    { feature: "Price", massagewave: "$79", competitorA: "$99", competitorB: "$69" },
  ],
};

const Checkmark = () => <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />;
const Cross = () => <XCircle className="w-6 h-6 text-red-500 mx-auto" />;

export function Comparison() {
  return (
    <section id="comparison" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
            See How We Compare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            MassageWave is designed with premium features at an unbeatable price. Here's how we stack up against the competition.
          </p>
        </div>
        <div className="mt-12 flow-root">
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <Table className="min-w-full divide-y divide-border bg-card">
                <TableHeader className="bg-muted/50">
                    <TableRow>
                    <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground sm:pl-6">Feature</TableHead>
                    <TableHead className="px-3 py-3.5 text-center text-sm font-semibold text-foreground">Competitor A</TableHead>
                    <TableHead className="px-3 py-3.5 text-center text-sm font-semibold text-foreground bg-primary/10">MassageWave</TableHead>
                    <TableHead className="px-3 py-3.5 text-center text-sm font-semibold text-foreground">Competitor B</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border">
                    {comparisonData.features.map((item) => (
                    <TableRow key={item.feature}>
                        <TableCell className="py-4 pl-4 pr-3 text-sm font-medium text-foreground sm:pl-6">{item.feature}</TableCell>
                        <TableCell className="px-3 py-4 text-sm text-muted-foreground text-center">
                            {typeof item.competitorA === 'boolean' ? (item.competitorA ? <Checkmark /> : <Cross />) : item.competitorA}
                        </TableCell>
                        <TableCell className="px-3 py-4 text-sm font-semibold text-foreground text-center bg-primary/5">
                            {typeof item.massagewave === 'boolean' ? (item.massagewave ? <Checkmark /> : <Cross />) : item.massagewave}
                        </TableCell>
                        <TableCell className="px-3 py-4 text-sm text-muted-foreground text-center">
                            {typeof item.competitorB === 'boolean' ? (item.competitorB ? <Checkmark /> : <Cross />) : item.competitorB}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
        </div>
      </div>
    </section>
  );
}
