# Compare the Market - Partner Portal

A comprehensive partner portal interface designed to address key pain points and provide actionable insights for insurance partners on the Compare the Market platform.

## 🎯 Overview

This partner portal is built to solve critical challenges faced by large insurance partners:

- **Portfolio Management**: View all products together or individually
- **Enhanced Benchmarking**: Compare performance against competitors
- **4 Levers Optimization**: Get actionable recommendations on pricing, product rules, placement, and commission
- **Market Expansion**: Data-driven insights for entering new markets
- **Segmentation Analytics**: Deep-dive into customer segments (Age, Region, Household, etc.)
- **Better Accessibility**: Modern UI with easy-to-understand insights

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm build
```

## 📊 Features

### 1. Dashboard Overview
- **KPI Cards**: Total quotes, conversion rate, revenue, market share
- **Performance Alerts**: Real-time recommendations with revenue impact
- **Recent Insights**: Auto-generated insights from segmentation and benchmarking
- **Product Performance Summary**: Quick view of all products with market position

### 2. Portfolio View
- **Toggle Views**: Switch between portfolio view and individual product lines
- **Revenue Distribution**: Visual breakdown of revenue by product
- **Cross-Product Insights**: Identify cross-sell and bundling opportunities
- **Product Cards**: Detailed metrics for each product line including:
  - Revenue, quotes, conversion rate
  - Market position
  - Price gap to market leader
  - Growth trends

### 3. Benchmarking
- **Competitive Comparison**: Visual charts comparing key metrics vs competitors
- **Market Share Distribution**: Pie chart showing market share across all players
- **Gap to Leader Analysis**: Specific recommendations to close performance gaps
- **Detailed Comparison Table**: Comprehensive view of all competitive metrics
- **Actionable Insights**: Specific revenue impact of closing gaps

**Key Innovation**: Unlike other PCWs, this provides full competitive context, not just your own performance.

### 4. 4 Levers Optimizer
The flagship feature addressing the core need for actionable recommendations.

#### The 4 Levers:
1. **Pricing**: Optimize pricing strategy for different segments
2. **Product Rules**: Refine underwriting criteria and product features
3. **Placement Logic**: Improve how products appear in comparisons
4. **Commission**: Adjust commission structure

#### Features:
- **Lever Scores**: Current optimization score for each lever (0-100)
- **Potential Gains**: Monthly revenue impact for each lever
- **Prioritized Recommendations**: Critical, High, Medium, Low priority
- **Specific Actions**: Exact changes to make (e.g., "Reduce price by £2.74")
- **Expected Impact**: Revenue gain, conversion lift, additional quotes
- **Target Segments**: Specific customer segments to focus on
- **Implementation Timeline**: How long each change takes
- **Confidence Levels**: High/Medium confidence in recommendations

**Example Recommendation**:
> "Reduce Car Insurance price by £2.74 for ages 25-34 in London → +£18,500/month revenue"

This addresses the key requirement: *"If your price was £2.74 lower, you would make £X more revenue."*

### 5. Market Expansion
Data-driven insights for partners considering new product lines.

**Features**:
- **Opportunity Score**: 0-100 score for each new market
- **Market Size & Growth**: Total addressable market and growth rates
- **Competition Analysis**: Number of competitors and market leader data
- **Time to Launch**: Realistic implementation timelines
- **Revenue Projections**: First-year revenue estimates
- **Regional Opportunities**: Growth trends by geographic region
- **Action Plan**: Phased approach (Q1: Travel, Q2: Pet, Q3-Q4: Life)

**Use Case**: Partner says *"I currently do home and motor; I might enter pet or life next."* → Portal provides complete data to make that decision.

### 6. Segmentation Analytics
Deep-dive into the most-requested customer segments.

#### Segment Types:
1. **Age** ⭐ (Top Priority)
   - 6 age bands: 17-24, 25-34, 35-44, 45-54, 55-64, 65+
   - Conversion rates by age
   - Characteristics (e.g., "34% higher conversion for 25-34")
   - Optimization opportunities
   - Top products by age group

2. **Region** ⭐
   - Performance by UK region
   - Regional growth trends
   - Top products by region
   - Income demographics

3. **Household Type** ⭐
   - Single, Couple, Young Family, Mature Family, etc.
   - Multi-product adoption by household
   - Revenue potential

4. **Price Bands**, **Switching Frequency**, **Device Type** (Coming Soon)

**Key Insight**: Age is consistently the #1 requested segment. The portal prioritizes this with detailed breakdowns.

## 🎨 Design Philosophy

### 1. Actionable Over Informational
Every insight includes a specific action and revenue impact. No "data dumping" - every metric tells a story.

### 2. Visual Hierarchy
- Critical items use red/orange
- Opportunities use blue
- Achievements use green
- Clear typography and spacing

### 3. Mobile-First Responsive
All views work on tablet and mobile devices.

### 4. Accessibility
- High contrast ratios
- Clear labels
- Keyboard navigation support
- Screen reader friendly

## 🔧 Technical Stack

- **React 18**: Core framework
- **React Router**: Navigation
- **CSS3**: Styling (no external UI libraries for full customization)
- **Create React App**: Build tooling

## 📈 Key Differentiators vs Other PCWs

### Current Pain Points Addressed:

1. ✅ **Portfolio View**
   - Before: Large partners couldn't see all products together
   - After: Toggle between portfolio and individual product views

2. ✅ **Benchmarking**
   - Before: Partners only see their own performance
   - After: Full competitive comparison with specific gaps to close

3. ✅ **Accessibility**
   - Before: "Worst of 4 PCWs" - hard to navigate
   - After: Modern, intuitive interface with clear insights

4. ✅ **Data Format**
   - Before: Basic summaries, no actionable insights
   - After: Every metric includes action and impact

5. ✅ **4 Levers Clarity**
   - Before: Partners don't know which levers to pull
   - After: Prioritized recommendations with exact changes and revenue impact

6. ✅ **Market Expansion Support**
   - Before: Partners ask for data but get little support
   - After: Complete market opportunity analysis with business cases

7. ✅ **Segmentation**
   - Before: Limited segment visibility
   - After: Deep-dive into Age (top priority) and other key segments

## 🎯 Use Cases

### For Helen (Sales)
- **Portfolio View**: Show partners their complete product suite performance
- **4 Levers Optimizer**: Strong data stories to influence partner decisions
- **Benchmarking**: "You're 0.8% behind leader - closing this gap = £245K/month"
- **Market Expansion**: Business cases for partners entering new markets

### For Partners (Product Managers)
- **Daily**: Check Dashboard for alerts and quick metrics
- **Weekly**: Review 4 Levers recommendations and implement changes
- **Monthly**: Analyze segmentation data to refine underwriting
- **Quarterly**: Evaluate market expansion opportunities

### For Partners (C-Suite)
- **Portfolio View**: High-level performance across all products
- **Benchmarking**: Market position and competitive gaps
- **Market Expansion**: Strategic growth opportunities

## 🔮 Future Enhancements

1. **Real-Time Data Integration**: Connect to actual CtM data sources
2. **Simulation Tools**: "What-if" analysis for price changes
3. **Automated Alerts**: Email/SMS notifications for critical changes
4. **Export Functionality**: PDF reports for stakeholder sharing
5. **API Integration**: Direct implementation of recommendations
6. **Historical Trends**: Year-over-year comparison views
7. **Custom Dashboards**: Partners configure their own views
8. **Additional Segments**: Complete implementation of Price Bands, Switching, Device Type

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎨 Color Scheme

- **Primary Blue**: #0066CC (CtM brand color)
- **Success Green**: #00CC66
- **Warning Orange**: #FF9800
- **Critical Red**: #FF3333
- **Neutral Gray**: #F9FAFB (background)

## 📄 License

This is a prototype/demo interface for Compare the Market partner portal.

## 👥 Credits

Designed to address specific partner pain points identified through user research and feedback from Sales team (Helen) and partner stakeholders.

---

## 🚦 Quick Navigation

- `/` - Dashboard Overview
- `/portfolio` - Portfolio View (all products together or individual)
- `/benchmarking` - Competitive Benchmarking
- `/levers` - 4 Levers Optimizer (actionable recommendations)
- `/segmentation` - Segmentation Analytics (Age, Region, Household)
- `/market-expansion` - Market Expansion Opportunities

---

**Built with ❤️ for Compare the Market Partners**


