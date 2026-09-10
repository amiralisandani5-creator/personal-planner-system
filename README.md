# Personal Planner System

A comprehensive personal planner application combining habit tracking, weekly priorities, time logging, financial tracking, and productivity analysis.

## Features

### 1. **Habit Tracking**
   - Daily habit monitoring (Monday-Sunday)
   - Visual progress indicators
   - Habit completion scoring
   - Part-based habit tracking (Part 1, Part 2)
   - Target habit goals

### 2. **Time Logging (Timelog)**
   - Track time spent on activities
   - Time blocks: 30min, 60min, 120min, 180min, 210min
   - Daily time allocation
   - Weekly time summary

### 3. **Weekly Planning**
   - Weekly priorities management
   - Daily task planning (Saturday-Friday)
   - Important events tracking
   - Next week preview
   - Most important events highlighting

### 4. **Financial Tracking**
   - Expense tracker with dates and descriptions
   - Financial plans by week
   - Budget monitoring
   - Expense categorization
   - Financial spending analysis

### 5. **Productivity Analysis**
   - Fitness analysis (Finesses)
   - Spend vs. Save tracking
   - Weekly financial planning (Rate Week Financial Plans)
   - Productivity metrics
   - Performance scoring

### 6. **Gantt Chart Timeline**
   - Visual project timeline
   - Task scheduling
   - Duration tracking
   - Weekly task distribution

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js/Express
- **Database**: MongoDB or PostgreSQL
- **Styling**: Tailwind CSS
- **Charts**: Chart.js or Recharts
- **State Management**: Redux/Context API

## Project Structure

```
personal-planner-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── database/
│   └── schemas/
└── docs/
```

## Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB or PostgreSQL

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Usage

1. **Create an Account**: Sign up with email and password
2. **Set Daily Habits**: Add habits to track daily
3. **Log Activities**: Record time spent on tasks
4. **Plan Weekly**: Set priorities and important events
5. **Track Finances**: Log expenses and monitor budget
6. **View Analytics**: Check productivity metrics and progress

## API Endpoints

### Habits
- `GET /api/habits` - Get all habits
- `POST /api/habits` - Create new habit
- `PUT /api/habits/:id` - Update habit
- `DELETE /api/habits/:id` - Delete habit
- `POST /api/habits/:id/log` - Log habit completion

### Time Logging
- `GET /api/timelogs` - Get all time logs
- `POST /api/timelogs` - Create time log entry
- `GET /api/timelogs/weekly` - Weekly summary

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create expense
- `GET /api/expenses/weekly` - Weekly expense summary

### Weekly Plans
- `GET /api/weekly-plans` - Get weekly plan
- `POST /api/weekly-plans` - Create/update weekly plan
- `GET /api/weekly-plans/priorities` - Get priorities

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event
- `GET /api/events/important` - Get important events

## Database Schema

See `/database/schemas/` for detailed MongoDB/PostgreSQL schemas.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, open an issue on GitHub or contact the development team.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Data export (PDF, CSV)
- [ ] AI-powered insights
- [ ] Goal tracking
- [ ] Recurring habits
- [ ] Budget forecasting
- [ ] Dark mode
- [ ] Multi-language support
