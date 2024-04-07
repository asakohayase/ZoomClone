import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";

export const useGetCalls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const client = useStreamVideoClient();
  const { user } = useUser();

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user?.id) return;
      setIsLoading(true);
      try {
        const { calls } = await client.queryCalls({
          sort: [{ field: "starts_at", direction: -1 }],
          filter_conditions: {
            starts_at: { $exists: true },
            $or: [
              { created_by_user_id: user.id },
              { members: { $in: [user.id] } },
            ],
          },
        });

        setCalls(calls);
      } catch (error) {
        console.error(error);
      }
    };
    loadCalls();
  }, [client, user?.id]);

  const now = new Date();

  const endedCalls = calls.filter(({ state: { startedAt, endedAt } }: Call) => {
    return (startedAt && startedAt <= now) || !!endedAt;
  });
  const upcomingCalls = calls.filter(({ state: { startedAt } }: Call) => {
    return startedAt && startedAt > now;
  });

  return { endedCalls, upcomingCalls, recordings: calls, isLoading };
};