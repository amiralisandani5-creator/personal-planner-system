const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
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
  entries: [{
    activity: {
      type: String,
      required: true
    },
    duration: {
      type: Number, // in minutes
      required: true
    },
    category: {
      type: String,
      enum: ['Work', 'Exercise', 'Learning', 'Recreation', 'Rest', 'Other'],
      default: 'Other'
    },
    startTime: String,
    endTime: String,
    notes: String,
    tags: [String]
  }],
  totalDuration: {
    type: Number, // total minutes for the day
    default: 0
  },
  productivity: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
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
timeLogSchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model('TimeLog', timeLogSchema);