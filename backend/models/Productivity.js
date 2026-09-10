const mongoose = require('mongoose');

const productivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  dayOfWeek: String,
  week: Number,
  year: Number,
  productivityScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  fitnessScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  wellnessMetrics: {
    energy: { type: Number, min: 0, max: 10 },
    mood: { type: Number, min: 0, max: 10 },
    sleep: { type: Number, min: 0, max: 10 },
    activity: { type: Number, min: 0, max: 10 }
  },
  spendVsSave: {
    planned: Number,
    spent: Number,
    saved: Number,
    savingRate: Number
  },
  weeklyRating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  metrics: {
    completionRate: { type: Number, default: 0 },
    qualityScore: { type: Number, default: 0 },
    efficiencyRating: { type: Number, default: 0 }
  },
  tasksCompleted: {
    type: Number,
    default: 0
  },
  habitCompletions: {
    type: Number,
    default: 0
  },
  totalTimeLogged: {
    type: Number, // in minutes
    default: 0
  },
  totalExpenses: {
    type: Number,
    default: 0
  },
  notes: String,
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
productivitySchema.index({ userId: 1, date: -1 });
productivitySchema.index({ userId: 1, week: 1, year: 1 });

module.exports = mongoose.model('Productivity', productivitySchema);