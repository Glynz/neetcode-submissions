class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // Combine the target and position data into a shared
        // object and then sort it based on position
        let fleet = 0;
        const cars = position.map((val, key) => ({
            position: val,
            timeToTarget: (target - val) / speed[key]
        }));

        cars.sort((a, b) => (b.position - a.position));
        
        let fleetAheadTimeToTarget = 0;
        cars.forEach((element) => {
            if(element.timeToTarget > fleetAheadTimeToTarget)  {
                fleet += 1;
                fleetAheadTimeToTarget = element.timeToTarget;
            }
        })

        return fleet;
    }
}
