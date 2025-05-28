class User {
  constructor() {
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.rankIndex = 0; // starts at -8
    this.progress = 0;
  }

  get rank() {
    return this.ranks[this.rankIndex];
  }

  incProgress(activityRank) {
    if (!this.ranks.includes(activityRank)) {
      throw new Error("Invalid rank");
    }

    // If user is already at max rank (8), no progress can be made
    if (this.rank === 8) return;

    const userIndex = this.ranks.indexOf(this.rank);
    const activityIndex = this.ranks.indexOf(activityRank);
    const d = activityIndex - userIndex;

    if (d === 0) {
      this.progress += 3;
    } else if (d === -1) {
      this.progress += 1;
    } else if (d > 0) {
      this.progress += 10 * d * d;
    } else if (d < -1) {
      return;
    }

    while (this.progress >= 100) {
      if (this.rankIndex < this.ranks.length - 1) {
        this.rankIndex++;
        this.progress -= 100;

        // If we've reached max rank, set progress to 0 and break
        if (this.rank === 8) {
          this.progress = 0;
          break;
        }
      } else {
        this.progress = 0;
        break;
      }
    }
  }
}

// Test the fix
const user = new User();
console.log(user.rank); // -8
console.log(user.progress); // 0

user.incProgress(-8);
console.log(user.progress); // 3

user.incProgress(-7);
console.log(user.progress); // 13

user.incProgress(-6);
console.log(user.progress); // 53

// Test reaching rank 8
// Let's advance to rank 8 and then try to add more progress
while (user.rank < 8) {
  user.incProgress(8); // Add lots of progress to reach rank 8
}
console.log(user.rank); // 8
console.log(user.progress); // 0

// Try to add more progress - should remain 0
user.incProgress(8);
console.log(user.progress); // Should still be 0
