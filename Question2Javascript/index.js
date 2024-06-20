const activities = [
  { userId: 1, activityType: "login", timestamp: "2024-06-14T10:00:00Z" },
  { userId: 2, activityType: "view", timestamp: "2024-06-14T10:05:00Z" },
  { userId: 1, activityType: "view", timestamp: "2024-06-14T10:15:00Z" },
  { userId: 3, activityType: "login", timestamp: "2024-06-14T10:20:00Z" },
  { userId: 2, activityType: "logout", timestamp: "2024-06-14T10:30:00Z" },
  { userId: 1, activityType: "logout", timestamp: "2024-06-14T10:35:00Z" },
  { userId: 3, activityType: "view", timestamp: "2024-06-14T10:40:00Z" },
  { userId: 3, activityType: "logout", timestamp: "2024-06-14T10:50:00Z" },
];

function countUniqueUsers(data) {
  const uniqueUsers = new Set(data.map((activity) => activity.userId));
  return uniqueUsers.size;
}

function mostCommonActivity(data) {
  const activityCount = {};

  data.forEach((activity) => {
    activityCount[activity.activityType] =
      (activityCount[activity.activityType] || 0) + 1;
  });

  let mostCommon = null;
  let maxCount = 0;

  for (const [activityType, count] of Object.entries(activityCount)) {
    if (count > maxCount) {
      maxCount = count;
      mostCommon = activityType;
    }
  }

  return mostCommon;
}

function userActivityTimeline(data) {
  const userTimelines = {};

  data.forEach((activity) => {
    if (!userTimelines[activity.userId]) {
      userTimelines[activity.userId] = [];
    }
    userTimelines[activity.userId].push(activity);
  });

  for (const userId in userTimelines) {
    userTimelines[userId].sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
    );
  }

  return userTimelines;
}

// Example calls
console.log("countUniqueUsers", countUniqueUsers(activities));
console.log("mostCommonActivity", mostCommonActivity(activities));
console.log("userActivityTimeline", userActivityTimeline(activities));
