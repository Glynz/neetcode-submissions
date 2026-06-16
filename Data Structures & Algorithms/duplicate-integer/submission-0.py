class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        numSeen = {}
        for num in nums:
            if num in numSeen:
                return True
            numSeen[num] = True;

        return False