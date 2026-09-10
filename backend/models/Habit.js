const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please provide a habit name']
  },
  description: String,
  category: {
    type: String,
    enum: ['Health', 'Fitness', 'Learning', 'Mindfulness', 'Productivity', 'Social', 'Other'],
    default: 'Other'
  },
  color: {
    type: String,
    default: '#3B82F6'
  },
  parts: {
    type: [String],
    default: ['Part 1']
  },
  frequency: {
    type: String,
    enum: ['Daily', 'Weekly', 'Custom'],
    default: 'Daily'
  },
  daysOfWeek: {
    Monday: Boolean,
    Tuesday: Boolean,
    Wednesday: Boolean,
    Thursday: Boolean,
    Friday: Boolean,
    Saturday: Boolean,
    Sunday: Boolean
  },
  logs: [{
    date: Date,
    dayOfWeek: String,
    parts: [{
      partName: String,
      completed: Boolean
    }]
  }],
  streak: {
    current: { type: Number, default: 0 },
    longest: { type: Number, default: 0 }
  },
  targetDays: {
    type: Number,
    default: 7
  },
  completionScore: {
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
habitSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Habit', habitSchema);