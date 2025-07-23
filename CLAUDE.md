# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (Next.js on port 3000)
- `npm run build` - Build for production (includes Prisma client generation)
- `npm run lint` - Run ESLint
- `npm run db:push` - Push Prisma schema changes to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio for database management

### Docker Development
- `docker-compose up -d` - Start full development environment (app + PostgreSQL + Redis)
- `docker-compose up -d db` - Start only database for local development

## Architecture Overview

This is a Next.js 14 SaaS platform with App Router architecture:

### Core Technologies
- **Next.js 14** with App Router (full-stack framework)
- **TypeScript** for type safety
- **Prisma** ORM with PostgreSQL database
- **NextAuth.js** for authentication (Google/GitHub OAuth)
- **Stripe** for payment processing and subscriptions
- **Tailwind CSS** for styling
- **AWS ECS Fargate** for production deployment

### Key Directory Structure
- `app/` - Next.js App Router (pages, API routes, layouts)
  - `api/auth/` - NextAuth.js authentication endpoints
  - `api/stripe/` - Stripe payment webhooks and checkout
  - `dashboard/` - Protected user dashboard
- `components/` - Reusable React components
  - `ui/` - Base UI components (button, card)
  - `providers/` - Context providers (auth)
- `lib/` - Utility libraries
  - `auth.ts` - NextAuth.js configuration
  - `prisma.ts` - Database client singleton
  - `stripe.ts` - Stripe client configuration
- `prisma/schema.prisma` - Database schema with User, Account, Session, Subscription, Payment models

### Database Schema
The Prisma schema includes:
- **User** - User accounts with OAuth integration
- **Account/Session** - NextAuth.js authentication tables
- **Subscription** - Stripe subscription management
- **Payment** - Payment tracking

### Authentication Flow
Uses NextAuth.js with database sessions and OAuth providers (Google, GitHub). All user data is stored in PostgreSQL with Prisma managing the schema.

### Payment Integration
Stripe handles subscriptions with webhook endpoints at `/api/stripe/webhook` for real-time payment event processing. Subscription status is tracked in the database.

## Development Workflow

1. **Database Setup**: Always run `npm run db:generate` after schema changes
2. **Environment**: Copy `.env.example` to `.env.local` and configure OAuth/Stripe keys
3. **Local Development**: Use `docker-compose up -d db` for database, then `npm run dev`
4. **Type Safety**: Run `npm run lint` before committing changes
5. **Production Build**: `npm run build` includes Prisma generation automatically

## AWS Deployment

Production deployment uses:
- **ECS Fargate** for containerized application hosting
- **RDS PostgreSQL** for managed database
- **CloudFormation** for infrastructure as code (`aws/cloudformation.yml`)
- **ECR** for container registry
- **GitHub Actions** for CI/CD pipeline