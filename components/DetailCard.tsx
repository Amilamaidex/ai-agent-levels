import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LanguageCode } from '@/types';

interface DetailContent {
  description: string;
  keyFeatures: string[];
  applications: string[];
  limitations: string[];
}

interface DetailTranslations {
  headers: {
    description: string;
    keyFeatures: string;
    applications: string;
    analysis: string;
    limitations: string;
  };
}

interface DetailCardProps {
  level: number;
  language: LanguageCode;
}

const translations: Record<LanguageCode, DetailTranslations> = {
  en: {
    headers: {
      description: 'Description',
      keyFeatures: 'Key Features',
      applications: 'Applications',
      analysis: 'Detailed Analysis',
      limitations: 'Current Limitations',
    },
  },
  fr: {
    headers: {
      description: 'Description',
      keyFeatures: 'Caractéristiques Principales',
      applications: 'Applications',
      analysis: 'Analyse Détaillée',
      limitations: 'Limitations Actuelles',
    },
  },
};

const levelDetails: Record<number, DetailContent> = {
  5: {
    description:
      'The highest form of AI capability, representing superintelligent systems that can fully act as digital representatives of users.',
    keyFeatures: [
      'Complete autonomous decision-making',
      'Advanced emotional intelligence',
      'Multi-agent collaboration',
      'Self-improving capabilities',
      'Ethical constraint awareness',
    ],
    applications: [
      'Complex negotiation and representation',
      'Autonomous business operations',
      'High-stakes decision making',
      'Cross-domain problem solving',
    ],
    limitations: [
      'Not yet achieved in general AI',
      'Limited to narrow domains currently',
      'Ethical considerations need resolution',
      'Safety guarantees still developing',
    ],
  },
  4: {
    description:
      'Advanced AI systems with sophisticated memory and context understanding, capable of virtuoso-level performance.',
    keyFeatures: [
      'Long-term memory retention',
      'Context-aware responses',
      'Proactive assistance',
      'Advanced pattern recognition',
      'Sophisticated reasoning',
    ],
    applications: [
      'Personal AI assistants',
      'Expert-level game playing',
      'Complex data analysis',
      'Predictive modeling',
    ],
    limitations: [
      'Limited to specific domains',
      'Requires substantial training',
      'Context understanding gaps',
      'Memory management challenges',
    ],
  },
  3: {
    description:
      'Expert-level AI systems capable of strategic planning and execution in well-defined domains.',
    keyFeatures: [
      'Strategic task planning',
      'Autonomous execution',
      'Feedback incorporation',
      'Domain expertise',
      'Process optimization',
    ],
    applications: [
      'Workflow automation',
      'Expert systems',
      'Process management',
      'Quality control',
    ],
    limitations: [
      'Domain-specific knowledge only',
      'Limited transfer learning',
      'Requires clear parameters',
      'Fixed capability set',
    ],
  },
  2: {
    description:
      'Competent AI systems that can handle deterministic tasks with reasonable accuracy.',
    keyFeatures: [
      'Basic decision making',
      'Rule-based reasoning',
      'Predictive actions',
      'Task automation',
      'Simple context understanding',
    ],
    applications: [
      'Customer service bots',
      'Basic data processing',
      'Automated responses',
      'Simple task execution',
    ],
    limitations: [
      'Limited flexibility',
      'Basic reasoning only',
      'Needs clear instructions',
      'No complex learning',
    ],
  },
  1: {
    description:
      'Basic AI systems capable of following pre-defined sequences and simple rules.',
    keyFeatures: [
      'Rule following',
      'Simple automation',
      'Basic task completion',
      'Sequential processing',
      'Fixed responses',
    ],
    applications: [
      'Simple chatbots',
      'Basic automation',
      'Rule-based systems',
      'Fixed workflow execution',
    ],
    limitations: [
      'Very limited flexibility',
      'No real intelligence',
      'Fixed behavior patterns',
      'No learning capability',
    ],
  },
  0: {
    description: 'Traditional software systems without AI capabilities.',
    keyFeatures: [
      'No AI components',
      'Fixed algorithms',
      'Deterministic behavior',
      'Manual configuration',
      'Rule-based operation',
    ],
    applications: [
      'Traditional software',
      'Basic tools',
      'Fixed functionality systems',
      'Manual processes',
    ],
    limitations: [
      'No adaptation',
      'No learning',
      'Fixed functionality',
      'Requires manual updates',
    ],
  },
};

const DetailSection: React.FC<{
  title: string;
  content: string | string[];
  type?: 'text' | 'list';
}> = ({ title, content, type = 'text' }) => (
  <div>
    <h4 className="font-medium text-blue-800 mb-2">{title}</h4>
    {type === 'text' ? (
      <p className="text-sm">{content}</p>
    ) : (
      <ul className="list-disc pl-5 text-sm space-y-1">
        {(content as string[]).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const DetailCard: React.FC<DetailCardProps> = ({ level, language }) => {
  const details = levelDetails[level];
  const t = translations[language].headers;

  if (!details) {
    return null;
  }

  return (
    <Card className="mt-4">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">
          {language === 'en' ? 'Level' : 'Niveau'} {level} {t.analysis}
        </h3>
        <div className="space-y-6">
          <DetailSection
            title={t.description}
            content={details.description}
            type="text"
          />
          <DetailSection
            title={t.keyFeatures}
            content={details.keyFeatures}
            type="list"
          />
          <DetailSection
            title={t.applications}
            content={details.applications}
            type="list"
          />
          <DetailSection
            title={t.limitations}
            content={details.limitations}
            type="list"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailCard;
