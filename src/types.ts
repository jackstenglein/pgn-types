/* From pgn-parser */
export type SevenRoosterTagKeys = 'Event'|'Site'|'Round'|'White'|'Black'|'Result'
export type SevenRoosterTags = { [key in SevenRoosterTagKeys]: string } & { Date?: PgnDate }
export type PlayerTagKeys = 'WhiteTitle'|'BlackTitle'|'WhiteElo'|'BlackElo'|'WhiteUSCF'|'BlackUSCF'|'WhiteNA'|
    'BlackNA'|'WhiteType'|'BlackType'
export type EventTagKeys = 'EventSponsor'|'Section'|'Stage'|'Board'
export type OpeningTagKeys = 'Opening'|'Variation'|'SubVariation'|'ECO'|'NIC'
export type AlternativeStartingKeys = 'SetUp'|'FEN'
export type GameConclusionTagKeys = 'Termination'
export type MiscTagKeys = 'Annotator'|'Mode'|'PlyCount'
export type LichessTagKeys = 'PuzzleEngine'|'PuzzleMakerVersion'|'PuzzleCategory'|'PuzzleWinner'|'Variant'|'WhiteRatingDiff'|
    'BlackRatingDiff'|'WhiteFideId'|'BlackFideId'|'WhiteTeam'|'BlackTeam'|'Orientation'
export type ClockTagKeys = 'Clock'|'WhiteClock'|'BlackClock'
export type TagKeys = SevenRoosterTagKeys | PlayerTagKeys | EventTagKeys | OpeningTagKeys |
    AlternativeStartingKeys | GameConclusionTagKeys | MiscTagKeys | LichessTagKeys | ClockTagKeys
export type TimeControlKeys = 'TimeControl'
export type TimeControl = { kind?: string, value?: string, moves?: number, seconds?: number, increment?: number }
export type DateTagKeys = 'Date'|'EventDate'|'UTCDate'
export type PgnDate = { value?: string, year?: number, month?: number, day?: number }
export type DateTags = { [key in DateTagKeys]: PgnDate }
export type TimeTagKeys = 'Time'|'UTCTime'
export type PgnTime = { value?: string, hour?: number, minute?: number, second?: number }
export type TimeTags = { [key in TimeTagKeys]: PgnTime }
export type Tags = { [key in Partial<TagKeys>]: string } & DateTags & TimeTags & MessagesObject & { [key in TimeControlKeys]: TimeControl }

export type Message = { key: string, value: string, message: string }
export type MessagesObject = { messages: Message[] }

export type GameComment = { comment?: string, colorArrows?: string[], colorFields?: string[],
    clk?: string, egt?: string, emt?: string, mct?: string, eval?: string }
export type PgnMove = {
    drawOffer: boolean;
    moveNumber: number,
    notation: { fig?: string | null, strike?: 'x' | null, col: string, row: string, check?: string,
        promotion: string | null, notation: string, disc?: string, drop?: boolean },
    variations: PgnMove[][],
    nag: string[],
    commentDiag: GameComment,
    commentMove?: string,
    commentAfter?: string,
    turn: 'w' | 'b'
}

/* From pgn-writer */
export const PROMOTIONS = {
    'q': 'queen',
    'r': 'rook',
    'b': 'bishop',
    'n': 'knight'
}

export const prom_short = ['q', 'r', 'b', 'n']
export type PROMOTIONS_SHORT = typeof prom_short[number]

export const colors = ['white', 'black'] as const
export const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const
export const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'] as const

export type File = typeof files[number]
export type Rank = typeof ranks[number]
export type Field = 'a0' | `${File}${Rank}`

export type Color = 'w' | 'b'

export type PgnReaderMove = {
    drawOffer?: boolean;
    moveNumber?: number,
    notation: { fig?: string | null, strike?: 'x' | null, col?: string, row?: string, check?: string, ep?: boolean
        promotion?: string | null, notation: string, disc?: string, drop?: boolean },
    variations: PgnReaderMove[],
    nag: string[],
    commentDiag?: GameComment,
    commentMove?: string,
    commentAfter?: string,
    turn?: Color
    from: Field,
    to: Field,
    fen?: string,
    index?: number,
    prev?: number,
    next?: number,
    variationLevel?: number
}

export type PgnGame = {
    tags?: Tags,
    gameComment?: GameComment,
    moves: PgnReaderMove[]
}
