# SaaS Platform

A modern, production-ready SaaS application built with Next.js, featuring authentication, payments, and cloud deployment. This application demonstrates enterprise-grade architecture patterns and best practices for building scalable web applications.

## 🏗️ Architecture Overview

### Technology Stack

**Frontend & Backend:**
- **Next.js 14** - Full-stack React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form management with validation

**Authentication:**
- **NextAuth.js** - Complete authentication solution
- **OAuth Providers** - Google and GitHub integration
- **Session Management** - Database-backed sessions

**Database & ORM:**
- **PostgreSQL** - Production-grade relational database
- **Prisma** - Modern database toolkit and ORM
- **Database Migrations** - Version-controlled schema changes

**Payments:**
- **Stripe** - Payment processing and subscription management
- **Webhooks** - Real-time payment event handling
- **Subscription Plans** - Multiple pricing tiers

**Cloud Infrastructure:**
- **AWS ECS Fargate** - Containerized application hosting
- **AWS RDS** - Managed PostgreSQL database
- **AWS S3** - Static asset storage
- **AWS CloudFormation** - Infrastructure as Code
- **Docker** - Containerization

**DevOps & CI/CD:**
- **GitHub Actions** - Automated testing and deployment
- **AWS ECR** - Container registry
- **Docker Compose** - Local development environment

### Architecture Diagram

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (Next.js)     │◄──►│   (Next.js API) │◄──►│   (PostgreSQL)  │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         ▲                       ▲                       ▲
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   OAuth         │    │   Stripe        │    │   AWS Cloud     │
│   (Google/GH)   │    │   (Payments)    │    │   (ECS/RDS/S3)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Key Features

### Authentication System
- **OAuth Integration**: Google and GitHub sign-in
- **Session Management**: Secure, database-backed sessions
- **User Profiles**: Complete user management system
- **Protected Routes**: Route-level authentication guards

### Payment Processing
- **Stripe Integration**: PCI-compliant payment processing
- **Subscription Plans**: Multiple pricing tiers (Starter, Professional, Enterprise)
- **Webhook Handling**: Real-time payment event processing
- **Customer Portal**: Self-service billing management

### Cloud-Native Architecture
- **Containerized Deployment**: Docker-based application packaging
- **Auto-Scaling**: ECS Fargate with automatic scaling
- **High Availability**: Multi-AZ deployment with load balancing
- **Managed Database**: AWS RDS with automated backups

### Developer Experience
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint and Prettier configuration
- **Testing**: Automated CI/CD pipeline
- **Local Development**: Docker Compose environment

## 🛠️ Technology Choices Rationale

### Why Next.js?
- **Full-Stack Framework**: Single codebase for frontend and backend
- **Performance**: Built-in optimization (SSR, SSG, Image optimization)
- **Developer Experience**: Hot reloading, TypeScript support
- **Ecosystem**: Large community and extensive plugin ecosystem
- **Scalability**: Edge runtime support and optimized bundling

### Why PostgreSQL + Prisma?
- **Reliability**: ACID compliance and proven production track record
- **Type Safety**: Prisma generates type-safe database client
- **Performance**: Efficient query optimization and connection pooling
- **Developer Experience**: Intuitive schema definition and migrations
- **Cloud Ready**: Excellent support in managed cloud services

### Why AWS?
- **Scalability**: Auto-scaling capabilities with ECS Fargate
- **Reliability**: 99.99% uptime SLA with managed services
- **Security**: Enterprise-grade security controls and compliance
- **Cost Efficiency**: Pay-per-use pricing model
- **Ecosystem**: Comprehensive suite of integrated services

### Why Stripe?
- **Security**: PCI DSS compliant payment processing
- **Global Scale**: Support for 100+ currencies and payment methods
- **Developer Experience**: Excellent documentation and testing tools
- **Feature Rich**: Subscriptions, invoicing, tax handling
- **Reliability**: 99.99% uptime with transparent status reporting

## 📦 Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   └── stripe/               # Payment processing
│   ├── auth/                     # Authentication pages
│   ├── dashboard/                # Protected dashboard
│   ├── pricing/                  # Pricing page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable UI components
│   ├── providers/                # Context providers
│   └── ui/                       # Base UI components
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Authentication config
│   ├── prisma.ts                 # Database client
│   ├── stripe.ts                 # Payment config
│   └── utils.ts                  # Helper utilities
├── prisma/                       # Database configuration
│   └── schema.prisma             # Database schema
├── aws/                          # AWS deployment configs
│   ├── cloudformation.yml        # Infrastructure as Code
│   └── task-definition.json      # ECS task definition
├── .github/workflows/            # CI/CD pipeline
├── docker-compose.yml            # Local development
├── Dockerfile                    # Production container
└── package.json                  # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose
- PostgreSQL (for local development)
- AWS CLI (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saas-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Start the database**
   ```bash
   docker-compose up -d db
   ```

5. **Set up the database**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Docker Development Environment

For a complete local environment including database:

```bash
docker-compose up -d
```

This starts:
- Next.js application on port 3000
- PostgreSQL database on port 5432
- Redis cache on port 6379

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/saas_db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# AWS (for production)
AWS_REGION="us-east-1"
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
S3_BUCKET_NAME="your-s3-bucket"
```

### OAuth Setup

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

#### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

### Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the dashboard
3. Set up webhook endpoint: `https://your-domain.com/api/stripe/webhook`
4. Configure webhook events: `checkout.session.completed`, `invoice.payment_succeeded`, etc.

## 🚀 Deployment

### AWS Deployment

1. **Set up AWS CLI**
   ```bash
   aws configure
   ```

2. **Deploy infrastructure**
   ```bash
   aws cloudformation deploy \
     --template-file aws/cloudformation.yml \
     --stack-name saas-platform \
     --capabilities CAPABILITY_IAM
   ```

3. **Build and push Docker image**
   ```bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
   docker build -t saas-platform .
   docker tag saas-platform:latest YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/saas-platform:latest
   docker push YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/saas-platform:latest
   ```

4. **Deploy ECS service**
   ```bash
   aws ecs create-service \
     --cluster saas-platform-cluster \
     --service-name saas-platform-service \
     --task-definition saas-platform \
     --desired-count 2
   ```

### GitHub Actions CI/CD

The repository includes a complete CI/CD pipeline that:
- Runs tests on every push
- Builds and pushes Docker images to ECR
- Deploys to ECS on main branch pushes

Set up the following GitHub secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build the application
npm run build

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push
```

## 📊 Monitoring and Observability

The application includes:
- **Health Checks**: Built-in health endpoints
- **Logging**: Structured logging with AWS CloudWatch
- **Metrics**: Application and infrastructure metrics
- **Alerts**: CloudWatch alarms for critical metrics

## 🔒 Security Features

- **Environment Variable Security**: Secrets managed via AWS Secrets Manager
- **Database Security**: VPC isolation and security groups
- **Application Security**: HTTPS enforcement and secure headers
- **Authentication Security**: Secure session management and CSRF protection
- **Payment Security**: PCI-compliant payment processing via Stripe

## 🎯 Production Readiness

This application is designed for production use with:
- **Scalability**: Auto-scaling ECS service with load balancing
- **Reliability**: Multi-AZ deployment with health checks
- **Performance**: Optimized Docker images and database queries
- **Security**: Enterprise-grade security controls
- **Observability**: Comprehensive logging and monitoring
- **Backup**: Automated database backups and point-in-time recovery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Next Steps

Consider implementing:
- **Advanced Analytics**: User behavior tracking and business metrics
- **Multi-tenancy**: Support for multiple organizations
- **Advanced Security**: 2FA, SSO, and audit logging
- **API Documentation**: OpenAPI/Swagger documentation
- **Mobile App**: React Native or Flutter companion app
- **Internationalization**: Multi-language support
- **Advanced DevOps**: Blue-green deployments and feature flags

---

Built with ❤️ using modern web technologies and cloud-native architecture patterns.