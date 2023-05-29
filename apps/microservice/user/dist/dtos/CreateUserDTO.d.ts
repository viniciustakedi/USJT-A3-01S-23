import { ArtistsResult } from './ArtistsResult';
import { TracksResult } from './TracksReult';
export declare class CreateUserDTO {
    name: string;
    spotify_id: string;
    spotify_uri: string;
    image_url: string;
    artists: ArtistsResult[];
    tracks: TracksResult[];
}