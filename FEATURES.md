# Personal Planner System - Features Documentation

## 1. Fitness Analysis (Finesses Analysis)

### Purpose
Track overall fitness and wellness metrics

### Components
- **Fitness Score**: Overall fitness rating
- **Weekly Monitoring**: Track improvements over time
- **Progress Indicators**: Visual representation of fitness level
- **Goal Setting**: Set and achieve fitness targets

### Data Structure
```json
{
  "date": "2024-01-15",
  "fitnessScore": 75,
  "category": "Excellent",
  "metrics": {
    "energy": 8,
    "mood": 7,
    "sleep": 8,
    "activity": 9
  }
}
```

---

## 2. Habit Analysis & Tracking

### Purpose
Monitor daily habit completion and consistency

### Features
- **Daily Tracking**: Mark habits complete/incomplete for each day
- **Part-based Habits**: Habits can have multiple parts (Part 1, Part 2)
- **Weekly Summary**: View habit completion percentage
- **Scoring System**: Calculate habit consistency score
- **Visual Indicators**: Checkmarks (✓) for completed, X for missed

### Tracked Habits
- Morning routine
- Exercise/Activity
- Study/Learning
- Meditation/Mindfulness
- Reading
- Social interaction
- Custom habits

### Data Structure
```json
{
  "habitId": "habit_001",
  "name": "Morning Exercise",
  "parts": ["Part 1", "Part 2"],
  "weeklyLog": {
    "Monday": { "part1": true, "part2": false },
    "Tuesday": { "part1": true, "part2": true },
    "Wednesday": { "part1": false, "part2": true },
    "Thursday": { "part1": true, "part2": true },
    "Friday": { "part1": true, "part2": false },
    "Saturday": { "part1": true, "part2": true },
    "Sunday": { "part1": false, "part2": false }
  },
  "completionScore": 71.43
}
```

---

## 3. Time Logging (Timelog)

### Purpose
Track time allocation and productivity hours

### Time Blocks
- **30 min**: Quick tasks/breaks
- **60 min**: Standard session
- **120 min**: Extended work session
- **180 min**: Half-day project
- **210 min**: Full-day commitment

### Features
- **Daily Logging**: Record time spent on activities
- **Activity Categories**: Work, Learning, Exercise, Recreation, etc.
- **Weekly Summary**: Total productive hours
- **Time Distribution**: Visual breakdown of time usage
- **Goal Setting**: Target productive hours per day

### Data Structure
```json
{
  "date": "2024-01-15",
  "entries": [
    {
      "activity": "Coding Project",
      "duration": 120,
      "category": "Work",
      "startTime": "09:00",
      "endTime": "11:00"
    },
    {
      "activity": "Learning",
      "duration": 60,
      "category": "Education",
      "startTime": "14:00",
      "endTime": "15:00"
    }
  ],
  "totalDuration": 180,
  "weeklyTotal": 1200
}
```

---

## 4. Productivity Analysis

### Purpose
Analyze and optimize productivity metrics

### Components
- **Spend vs. Save Analysis**: Track resources spent vs. saved
- **Weekly Financial Plans**: Budget planning and tracking
- **Rate Week Financial**: Calculate week efficiency rating
- **Productivity Score**: Overall productivity metric
- **Performance Tracking**: Historical performance data

### Metrics
- Productive Hours: Time spent on valuable activities
- Completion Rate: Percentage of planned tasks completed
- Quality Score: Assessment of work quality
- Efficiency Rating: Output per hour ratio

### Data Structure
```json
{
  "weekStartDate": "2024-01-15",
  "productivityScore": 82,
  "spendVsSave": {
    "planned": 1000,
    "spent": 850,
    "saved": 150
  },
  "weeklyRating": 8.2,
  "metrics": {
    "completionRate": 85,
    "qualityScore": 88,
    "efficiencyRating": 9.1
  }
}
```

---

## 5. Weekly Financial Plans

### Purpose
Manage weekly budget and financial planning

### Features
- **Budget Setting**: Define weekly budget limits
- **Expense Tracking**: Log all expenses with categories
- **Spend Analysis**: Compare spending to budget
- **Weekly Reports**: Summary of financial activity
- **Next Week Planning**: Prepare budget for next week

### Budget Categories
- Food & Groceries
- Transportation
- Entertainment
- Education
- Health & Wellness
- Savings
- Miscellaneous

### Data Structure
```json
{
  "weekNumber": 3,
  "weekStartDate": "2024-01-15",
  "budget": 5000,
  "expenses": [
    {
      "date": "2024-01-15",
      "category": "Food",
      "amount": 500,
      "description": "Groceries"
    }
  ],
  "totalSpent": 2300,
  "remaining": 2700,
  "spendingRate": 46
}
```

---

## 6. Expense Tracker

### Purpose
Detailed expense logging and categorization

### Features
- **Date-based Logging**: Record expenses by date (8/1, 8/2, etc.)
- **Description**: Add details about each expense
- **Amount Tracking**: Record amounts (in local currency)
- **Category Assignment**: Organize by expense type
- **Receipt Storage**: Optional receipt image/document
- **Export Reports**: Generate expense reports

### Supported Amounts
- Individual expenses from small amounts to millions
- Multi-currency support
- Currency conversion

### Data Structure
```json
{
  "expenseId": "exp_001",
  "date": "2024-08-01",
  "description": "Lunch at restaurant",
  "amount": 7800000,
  "currency": "IRR",
  "category": "Food",
  "paymentMethod": "Cash",
  "tags": ["dining", "social"],
  "receipt": "url_to_receipt_image"
}
```

---

## 7. Weekly Overview & Priorities

### Purpose
Manage weekly tasks and important events

### Features
- **Weekly Priorities**: List top priorities for the week
- **Daily Breakdown**: Organize priorities by day
- **Important Events**: Highlight key events
- **Next Week Preview**: Plan ahead
- **Progress Tracking**: Mark completed priorities

### Days Covered
- Saturday through Friday
- Plus "Next Week" section

### Data Structure
```json
{
  "week": 3,
  "startDate": "2024-01-13",
  "priorities": {
    "overall": [
      "Complete project A",
      "Review financials",
      "Plan next month"
    ]
  },
  "dailyPriorities": {
    "Saturday": ["Priority 1", "Priority 2"],
    "Sunday": ["Priority 1"],
    "Monday": ["Priority 1", "Priority 2", "Priority 3"],
    "Tuesday": [],
    "Wednesday": ["Priority 1"],
    "Thursday": [],
    "Friday": ["Priority 1"]
  },
  "nextWeekPriorities": [
    "New initiative"
  ]
}
```

---

## 8. Important Events Tracker

### Purpose
Track and manage most important events

### Features
- **Event Categorization**: Important vs. regular events
- **Weekly Calendar**: View events by day
- **Event Details**: Description, time, location
- **Reminders**: Get notifications for important events
- **Archive**: Keep historical record of events

### Data Structure
```json
{
  "eventId": "evt_001",
  "title": "Project Deadline",
  "date": "2024-01-17",
  "dayOfWeek": "Wednesday",
  "time": "17:00",
  "importance": "High",
  "description": "Submit final project deliverables",
  "category": "Work",
  "completed": false
}
```

---

## 9. Gantt Chart Timeline

### Purpose
Visual project timeline and task scheduling

### Features
- **Task Visualization**: See tasks across timeline
- **Duration Display**: Visual length represents task duration
- **Daily Distribution**: Tasks arranged by day (Mon-Sun)
- **Progress Indicator**: Visual progress bars
- **Dependency Tracking**: Task relationships
- **Time Range**: View multiple weeks/months

### Data Structure
```json
{
  "taskId": "task_001",
  "title": "Feature Development",
  "startDate": "2024-01-15",
  "endDate": "2024-01-18",
  "duration": 4,
  "progress": 75,
  "assignee": "Team Member",
  "dependencies": ["task_000"],
  "status": "In Progress"
}
```

---

## 10. Notes & Events Section

### Purpose
Quick notes and event tracking

### Features
- **Quick Notes**: Add notes for specific days
- **Event List**: Important dates and events
- **Amount Tracking**: Associated financial amounts
- **Cross-reference**: Link to other sections
- **Search & Filter**: Find notes and events

### Data Structure
```json
{
  "noteId": "note_001",
  "date": "2024-01-15",
  "content": "Remember to call client",
  "associatedAmount": 50000000,
  "type": "Note",
  "tags": ["business", "urgent"]
}
```

---

## Integration Points

### Cross-Feature Connections
1. **Habits → Time Logging**: Track time spent on habit-related activities
2. **Time Logging → Productivity**: Calculate productivity metrics from time logs
3. **Weekly Plans → Important Events**: Events inform weekly priorities
4. **Expenses → Financial Plans**: Track actual spending vs. planned budget
5. **Tasks → Gantt Chart**: Visualize weekly task schedule
6. **All Features → Dashboard**: Central overview of all metrics

---

## Reporting & Analytics

### Available Reports
- Weekly Productivity Report
- Monthly Expense Report
- Habit Consistency Report
- Financial Summary
- Time Allocation Analysis
- Performance Trends

### Export Formats
- PDF
- CSV
- Excel
- JSON
