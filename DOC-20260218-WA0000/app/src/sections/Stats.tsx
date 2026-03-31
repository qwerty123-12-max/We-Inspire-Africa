import { Users, Calendar, Building2, Award } from 'lucide-react';
import { useCountUp } from '@/hooks/useScrollAnimation';

const stats = [
  {
    icon: Users,
    value: 70,
    suffix: '+',
    label: 'Current Youth Members',
  },
  {
    icon: Calendar,
    value: 1,
    suffix: '+',
    label: 'Annual Events',
  },
  {
    icon: Building2,
    value: 6,
    suffix: '+',
    label: 'Partner Organizations',
  },
  {
    icon: Award,
    value: 5,
    suffix: '',
    label: 'Years of Impact',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Number of youths mentored',
  },
];

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
}: {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, count } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/30 transition-colors duration-300">
        <Icon className="text-coral" size={28} />
      </div>
      <p className="text-white font-rubik font-bold text-4xl md:text-5xl mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-white/70 text-lg">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-coral font-rubik font-medium text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-white mt-3 mb-6">Making a Difference</h2>
          <p className="text-white/70 text-lg">
            Numbers that reflect our commitment to empowering youth and building
            stronger communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
