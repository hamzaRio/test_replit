# MarrakechDunes - Moroccan Adventure Booking Platform

## Overview

MarrakechDunes is a full-stack web application designed for booking authentic Moroccan desert adventures and experiences. The platform offers a seamless customer booking journey, from browsing activities to receiving confirmations, alongside robust administrative tools for managing bookings, activities, and user roles. The vision is to provide a user-friendly and efficient platform that connects travelers with unique Moroccan adventures, leveraging modern web technologies and real-time communication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **State Management**: TanStack Query
- **UI Framework**: Shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS with a custom Moroccan-themed color palette
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **UI/UX Decisions**: Custom Moroccan theme with traditional colors, professional slideshows for activity images, enhanced confirmation form layouts, clickable step navigation, and a personalized welcome animation system. All UI elements prioritize responsiveness and consistency across devices.

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB (pure MongoDB-only storage system) with Mongoose ORM
- **Session Management**: Express sessions with `connect-mongo`
- **API Design**: RESTful API with JSON responses
- **Key Features**: Admin authentication with role-based access (admin/superadmin), comprehensive booking management, activity CRUD operations, customer review system, international phone number support, and cash payment gateway integration.
- **Architectural Decisions**: Clean client/server separation into distinct `client/` and `server/` folders for optimized deployment. Implementation of robust server-side image serving with a fallback system. Comprehensive security framework with HTTPS, rate limiting, input validation, and session management.

### Development Environment
- **Platform**: Replit
- **Process Management**: tsx for TypeScript execution in development

## External Dependencies

- **Database**: MongoDB Atlas
- **UI/Styling**: Radix UI, Tailwind CSS, Lucide React
- **Form Management**: React Hook Form, Zod
- **API Communication**: TanStack Query
- **Routing**: Wouter
- **Session Management**: `connect-mongo`
- **Phone Input**: `react-phone-input-2`
- **Build Tools**: Vite, ESBuild