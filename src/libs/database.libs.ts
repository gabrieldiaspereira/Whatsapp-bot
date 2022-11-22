import { PrismaClient, Session } from "@prisma/client";

export default class Database extends PrismaClient {
  constructor() {
    super({
      errorFormat: "pretty",
    });
  }
  /**
   * Create a new session with given Id
   * @param {any} sessionId:string
   */
  public createSession = async (sessionId: string, session?: string): Promise<Session> =>
    await this.session.create({
      data: { sessionId, session },
    });
  /**
   * Get a session by Id
   * @param {any} sessionId:string
   */
  public getSession = async (sessionId: string): Promise<Session | null> =>
    await this.session.findFirst({
      where: { sessionId },
    });
  /**
   * Update a session by Id with given session value
   * @param {any} sessionId:string
   * @param {any} session:string
   */
  public updateSession = async (sessionId: string, session: string): Promise<Session> =>
    await this.session.update({
      where: { sessionId: sessionId },
      data: { session: session },
    });
  /**
   * Delete a session
   * @param {any} sessionId:string
   */
  public deleteSession = async (sessionId: string): Promise<Session> =>
    await this.session.delete({
      where: { sessionId },
    });
  /**
   * Delete all sessions
   */
  public deleteAllSession = async () => await this.session.deleteMany();
}