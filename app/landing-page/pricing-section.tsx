import PricingCard from "./pricing-card";

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: string[];
  url: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Freely",
    price: 0,
    description: "For hobbyists",
    isPopular: false,
    url: "/dashboard",
    features: [
      "1 project",
      "10 users",
      "10MB storage",
      "Support",
    ],
  },
  {
    title: "Monthly",
    price: 9.99,
    description: "For growing teams",
    isPopular: false,
    url: "/payments/subscribe?plan=monthly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
  },
  {
    title: "Yearly Summolings Launch Price",
    price: 69.99,
    description: "Upgrade to save more!",
    isPopular: true,
    url: "/payments/subscribe?plan=yearly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
      "feedly swag"
    ],
  },
]


const PricingSection = () => {
  return (
    <div className="text-center">
      <h1 className="capitalize text-3xl">Pricing</h1>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible Pricing that Grows With You!
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {
          pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection;