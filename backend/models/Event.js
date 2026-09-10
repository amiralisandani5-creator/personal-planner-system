const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    required: true
  },
  dayOfWeek: String,
  startTime: String,
  endTime: String,
  time: String,
  location: String,
  category: {
    type: String,
    enum: ['Work', 'Personal', 'Health', 'Social', 'Finance', 'Other'],
    default: 'Personal'
  },
  importance: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium'
  },
  isImportant: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  },
  reminders: [{
    type: String,
    enum: ['5min', '15min', '30min', '1hour', '1day', 'on-time']
  }],
  attendees: [{
    name: String,
    email: String
  }],
  tags: [String],
  relatedAmount: Number,
  currency: String,
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
eventSchema.index({ userId: 1, date: -1 });
eventSchema.index({ userId: 1, isImportant: 1 });

module.exports = mongoose.model('Event', eventSchema);