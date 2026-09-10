const mongoose = require('mongoose');

const weeklyPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  week: {
    type: Number,
    required: true
  },
  year: Number,
  startDate: Date,
  endDate: Date,
  overallPriorities: [String],
  dailyPriorities: {
    Monday: [String],
    Tuesday: [String],
    Wednesday: [String],
    Thursday: [String],
    Friday: [String],
    Saturday: [String],
    Sunday: [String]
  },
  weeklyBudget: {
    type: Number,
    default: 0
  },
  goals: [{
    title: String,
    description: String,
    target: Number,
    achieved: Number,
    category: String
  }],
  notes: String,
  completionRate: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient queries
weeklyPlanSchema.index({ userId: 1, week: 1, year: 1 });

module.exports = mongoose.model('WeeklyPlan', weeklyPlanSchema);