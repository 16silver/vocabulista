import { differenceInDays } from "date-fns";

export function buildStreakCount(date: Date) {
    return {
      startDate: date,
      lastLoginDate: date,
      currentCount: 1
    };
  }
  
  export function resetStreakCount(
    _: { startDate: Date; lastLoginDate: Date; currentCount: number },
    date: Date
  ) {
    return {
      startDate: date,
      lastLoginDate: date,
      currentCount: 1
    };
  }
  
  export function incrementStreakCount(currentStreakCount: {
    startDate: Date;
    lastLoginDate: Date;
    currentCount: number;
  }) {
    return {
      ...currentStreakCount,
      currentCount: currentStreakCount.currentCount += 1
    };
  }

  export function updateStreakCount(currentStreakCount: {
    startDate: Date;
    lastLoginDate: Date;
    currentCount: number;
  }, currentDate: Date) {
    const difference = differenceInDays(currentDate, currentStreakCount.lastLoginDate);
    if (difference === 0) {
        return currentStreakCount;
    }

    if (difference === 1) {
        return incrementStreakCount(currentStreakCount);
    }

    return resetStreakCount(currentStreakCount, currentDate);
  }