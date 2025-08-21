import axios from "axios";
import { Note } from "../types/note";

const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: "https://api.notehub.com",
  headers: {
    Authorization: `Bearer ${myKey}`,
    Accept: "application/json",
  },
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
});

interface FetchNotesParams {
  page: number;
  search: string;
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNoteCreate {
  title: string;
  content: string;
  tag: string;
}

// ! GET
export async function fetchNotes({
  search,
  page,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const { data } = await api.get<FetchNotesResponse>("/notes", {
    params: { search, page, perPage: 10 },
  });
  return data;
}

// ! POST
export async function createNote(newNote: FetchNoteCreate): Promise<Note> {
  const { data } = await api.post<Note>("/notes", newNote);
  return data;
}

// ! DELETE
export async function deleteNote(id: string): Promise<Note> {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
}
