import React from 'react';
import PricingCard from '../components/PricingCard';
import '../styles/PricingPage.css';

function PricingPage() {
    const plans = [
        {
            title: 'Individuals',
            price: '$0 / month',
            description: 'Perfect for individuals just starting out.',
            features: [
                '1 user',
                'Unlimited calendars',
                'Event types',
                'Stripe integration',
                'Workflows',
            ],
            ctaText: 'Get started',
            ctaType: 'button',
        },
        {
            title: 'Teams',
            price: '$12 / user/mo',
            description: 'Great for small teams upgrading their performance.',
            features: [
                '1 team',
                'Schedule meetings as a team',
                'Round-Robin booking',
                'Advanced forms',
                'Team workflows',
            ],
            ctaText: 'Get started',
            ctaType: 'button',
            highlight: true,
        },
        {
            title: 'Enterprise',
            price: '$15k / year',
            description: 'For larger teams that need more control & privacy.',
            features: [
                'Unlimited sub-teams',
                'Insights & analytics',
                'Active Directory sync',
                '24/7 support',
                'HRIS sync',
            ],
            ctaText: 'Contact us',
            ctaType: 'link',
        },
    ];

    return (
        <div className="pricing-page">
            <div className="intro">
                <h1>Simple pricing based on your needs</h1>
                <p>Discover a variety of our advanced features. Unlimited and free for individuals.</p>
            </div>
            <div className="cards-container">
                {plans.map((plan, i) => (
                    <PricingCard key={i} {...plan} />
                ))}
            </div>
        </div>
    );
}

export default PricingPage;
