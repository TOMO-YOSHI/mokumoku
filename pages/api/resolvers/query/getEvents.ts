import { prisma } from '../../../../prisma/client';
import { QueryResolvers } from '../../../../@types/generated/graphql';

export const getEvents: QueryResolvers['getEvemts'] = async () => {
  const res = await prisma.event.findMany();
  return res;
};

// export const Event = {
//   host: (event: { hostId: string; }) => prisma.user.findUnique({
//     where: {
//       id: event.hostId
//     }
//   })
// }