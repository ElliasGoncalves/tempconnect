# API Research for Temporary Phone and Email Application

## Temporary Email Services

### 1. Mail.tm API
**URL:** https://docs.mail.tm/
**Status:** Free, no API key required
**Rate Limit:** 8 queries per second per IP address

**Key Features:**
- Complete REST API with full CRUD operations
- Create temporary email accounts
- Retrieve messages in real-time
- Mark messages as read/unread
- Delete messages
- Get message attachments and source
- Webhook support for real-time notifications

**Main Endpoints:**
- `GET /domains` - Get available email domains
- `POST /accounts` - Create new email account
- `POST /token` - Get authentication token
- `GET /messages` - List all messages
- `GET /messages/{id}` - Get specific message
- `DELETE /messages/{id}` - Delete message
- `PATCH /messages/{id}` - Mark as read
- `GET /sources/{id}` - Get message source

**Authentication:**
- Bearer token authentication
- First create account, then obtain token via POST /token
- Token used in Authorization header: "Bearer TOKEN"

**Workflow:**
1. Fetch available domains from /domains
2. Create account with email address and password
3. Get bearer token using credentials
4. Use token to retrieve messages

### 2. Temp-Mail.org API
**URL:** https://temp-mail.org/en/api
**Status:** Available via RapidAPI (requires API key)

**Key Features:**
- Generate disposable email addresses
- Receive emails automatically
- Messages auto-delete after 1-2 hours
- JSON formatted message retrieval
- Base64 encoded raw messages

**Limitations:**
- Cannot receive from government services or major financial institutions
- Cannot use abuse@, webmaster@, contact@, postmaster@, hostmaster@, admin@ addresses

## Temporary Phone Number Services

### Research Findings:
Most temporary phone number services found are web-based platforms without public APIs:
- receive-smss.com
- esimplus.me
- quackr.io
- freephonenum.com
- textverified.com

**Challenges:**
- No free, reliable public APIs available for temporary phone numbers
- Most services require web scraping (against ToS)
- Commercial APIs exist but require payment

**Alternative Approach:**
Since reliable free phone number APIs are limited, the application will focus on:
1. **Primary Feature:** Temporary email generation using Mail.tm API (fully functional)
2. **Secondary Feature:** Display curated list of free temporary phone number websites with direct links

## Recommended Implementation Strategy

### Phase 1: Core Email Functionality
- Implement full temporary email generation using Mail.tm API
- Real-time message retrieval and display
- Message management (read, delete)
- Clean, modern UI with country/domain selection

### Phase 2: Phone Number Integration
- Provide curated list of free temporary phone number services
- Direct links to popular services by country
- Educational content about how to use these services
- Disclaimer about limitations

### Phase 3: Enhanced Features
- Email history management
- Copy to clipboard functionality
- QR code generation for easy sharing
- Dark/light theme
- Mobile-responsive design

## Technical Stack Recommendation
- **Frontend:** React + TypeScript + TailwindCSS
- **Backend:** Node.js/Express (for API proxy if needed)
- **API Integration:** Mail.tm REST API
- **Deployment:** Web application with test domain initially, then AWS migration
