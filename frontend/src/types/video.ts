export interface Video {
    id: number;
    language: string;
    video_file: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
}
