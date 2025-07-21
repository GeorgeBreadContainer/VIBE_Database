export function Structure()
{
    return(
        <main>
            <h1>
                Structure
            </h1>
            <h2>
                Tables
            </h2>
            <h3>
                accounts
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int] [ident]
                    </th>
                    <th>
                        steam_id_64 [varchar(20)]
                    </th>
                    <th>
                        username [varchar(32)]
                    </th>
                    <th>
                        privacy_type [varchar(20)]
                    </th>
                    <th>
                        account_creation_date [Timestamp]
                    </th>
                    <th>
                        account_type_id [int]
                    </th>
                </tr>
            </thead>
            <h3>
                account_types
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(20)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Player
                    </td>
                </tr>
                <tr>
                    <td>
                        2
                    </td>
                    <td>
                        Suspect
                    </td>
                </tr>
                <tr>
                    <td>
                        3
                    </td>
                    <td>
                        Cheater
                    </td>
                </tr>
                <tr>
                    <td>
                        4
                    </td>
                    <td>
                        Bot
                    </td>
                </tr>
            </tbody>
            <h3>
                account_evidence
            </h3>
            <thead>
                <tr>
                    <th>
                        account_id [PK] [int]
                    </th>
                    <th>
                        evidence_type_id [PK] [int]
                    </th>
                </tr>
            </thead>
            <h3>
                evidence_types
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(32)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        New Account
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        An F2p
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        Has Vac ban(s)
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Has Source ban(s)
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Has game ban(s)
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Low hour count
                    </td>
                </tr><tr>
                    <td>
                        7
                    </td>
                    <td>
                        High sh unique views
                    </td>
                </tr><tr>
                    <td>
                        8
                    </td>
                    <td>
                        Private profile
                    </td>
                </tr><tr>
                    <td>
                        9
                    </td>
                    <td>
                        Suspicious nickname
                    </td>
                </tr><tr>
                    <td>
                        10
                    </td>
                    <td>
                        All Achievements
                    </td>
                </tr><tr>
                    <td>
                        11
                    </td>
                    <td>
                        Top scoring
                    </td>
                </tr><tr>
                    <td>
                        12
                    </td>
                    <td>
                        Point deviation growth
                    </td>
                </tr><tr>
                    <td>
                        13
                    </td>
                    <td>
                        Substantial point advantage
                    </td>
                </tr><tr>
                    <td>
                        14
                    </td>
                    <td>
                        Kill feed information
                    </td>
                </tr><tr>
                    <td>
                        15
                    </td>
                    <td>
                        Scoreboard information
                    </td>
                </tr><tr>
                    <td>
                        16
                    </td>
                    <td>
                        People's claims
                    </td>
                </tr><tr>
                    <td>
                        17
                    </td>
                    <td>
                        Talks only with team chat
                    </td>
                </tr><tr>
                    <td>
                        18
                    </td>
                    <td>
                        Talks only when being kicked
                    </td>
                </tr><tr>
                    <td>
                        19
                    </td>
                    <td>
                        Verbally Toxic
                    </td>
                </tr><tr>
                    <td>
                        20
                    </td>
                    <td>
                        Non-Verbally Toxic
                    </td>
                </tr><tr>
                    <td>
                        21
                    </td>
                    <td>
                        Outside of the game Toxic
                    </td>
                </tr><tr>
                    <td>
                        22
                    </td>
                    <td>
                        Model twitching
                    </td>
                </tr><tr>
                    <td>
                        23
                    </td>
                    <td>
                        Model snapping
                    </td>
                </tr><tr>
                    <td>
                        24
                    </td>
                    <td>
                        Increased luck
                    </td>
                </tr><tr>
                    <td>
                        25
                    </td>
                    <td>
                        Scoreboard-status shenanigans
                    </td>
                </tr><tr>
                    <td>
                        26
                    </td>
                    <td>
                        Bot-like behaviour
                    </td>
                </tr><tr>
                    <td>
                        27
                    </td>
                    <td>
                        Cross-hair superposition
                    </td>
                </tr><tr>
                    <td>
                        28
                    </td>
                    <td>
                        Double flicking
                    </td>
                </tr><tr>
                    <td>
                        29
                    </td>
                    <td>
                        Accidental kill
                    </td>
                </tr><tr>
                    <td>
                        30
                    </td>
                    <td>
                        Prediction of a random movement
                    </td>
                </tr><tr>
                    <td>
                        31
                    </td>
                    <td>
                        The bot peek of death
                    </td>
                </tr><tr>
                    <td>
                        32
                    </td>
                    <td>
                        Shoots at the funny spots
                    </td>
                </tr><tr>
                    <td>
                        33
                    </td>
                    <td>
                        Child
                    </td>
                </tr><tr>
                    <td>
                        34
                    </td>
                    <td>
                        Demo file
                    </td>
                </tr><tr>
                    <td>
                        35
                    </td>
                    <td>
                        Eyes.
                    </td>
                </tr><tr>
                    <td>
                        36
                    </td>
                    <td>
                        Multiple bans
                    </td>
                </tr><tr>
                    <td>
                        37
                    </td>
                    <td>
                        Cheater team :D!
                    </td>
                </tr><tr>
                    <td>
                        38
                    </td>
                    <td>
                        Profile URL
                    </td>
                </tr><tr>
                    <td>
                        39
                    </td>
                    <td>
                        Wallhack to Wallhack scene
                    </td>
                </tr><tr>
                    <td>
                        40
                    </td>
                    <td>
                        Hiding evidence
                    </td>
                </tr>
            </tbody>
            <h3>
                account_traits
            </h3>
            <thead>
                <tr>
                    <th>
                        account_id [PK] [int]
                    </th>
                    <th>
                        trait_id [PK] [int]
                    </th>
                </tr>
            </thead>
            <h3>
                traits
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(20)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Quiet
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        Toxic
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        Delusional
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Considerate
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Cool dude
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Gamer
                    </td>
                </tr>
            </tbody>
            <h3>
                cheat suspicions
            </h3>
            <thead>
                <tr>
                    <th>
                        account_id [PK] [int]
                    </th>
                    <th>
                        cheat_type_id [PK] [int]
                    </th>
                </tr>
            </thead>
            <h3>
                cheat_types
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(20)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Aimbot
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        Triggerbot
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        ESP
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Crit Bucket
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Spinbot
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Fake latency
                    </td>
                </tr><tr>
                    <td>
                        7
                    </td>
                    <td>
                        Ping reducer
                    </td>
                </tr><tr>
                    <td>
                        8
                    </td>
                    <td>
                        Fake lag
                    </td>
                </tr><tr>
                    <td>
                        9
                    </td>
                    <td>
                        Anti-backstab
                    </td>
                </tr><tr>
                    <td>
                        10
                    </td>
                    <td>
                        Auto-backstab
                    </td>
                </tr><tr>
                    <td>
                        11
                    </td>
                    <td>
                        Auto-reflect
                    </td>
                </tr><tr>
                    <td>
                        12
                    </td>
                    <td>
                        Auto-strafer
                    </td>
                </tr><tr>
                    <td>
                        13
                    </td>
                    <td>
                        Speedhack
                    </td>
                </tr><tr>
                    <td>
                        14
                    </td>
                    <td>
                        No push
                    </td>
                </tr><tr>
                    <td>
                        15
                    </td>
                    <td>
                        No recoil
                    </td>
                </tr><tr>
                    <td>
                        16
                    </td>
                    <td>
                        Skin changer
                    </td>
                </tr><tr>
                    <td>
                        17
                    </td>
                    <td>
                        LMAOBOX
                    </td>
                </tr><tr>
                    <td>
                        18
                    </td>
                    <td>
                        Nullcore
                    </td>
                </tr><tr>
                    <td>
                        19
                    </td>
                    <td>
                        Rijin
                    </td>
                </tr><tr>
                    <td>
                        20
                    </td>
                    <td>
                        Unknown
                    </td>
                </tr>
            </tbody>
            <h3>
                bans
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int] [ident]
                    </th>
                    <th>
                        account_id [int]
                    </th>
                    <th>
                        admin_id [int]
                    </th>
                    <th>
                        ban_type_id [int]
                    </th>
                    <th>
                        ban_reason_id [int]
                    </th>
                    <th>
                        offence_id [int]
                    </th>
                    <th>
                        ban_date [Timestamp]
                    </th>
                </tr>
            </thead>
            <h3>
                admins
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        name [varchar(32)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Vac
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        Valve
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        EasyAntiCheat
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Unknown
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Panda-Community.com
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Skial.com
                    </td>
                </tr><tr>
                    <td>
                        7
                    </td>
                    <td>
                        UGC.TF
                    </td>
                </tr><tr>
                    <td>
                        8
                    </td>
                    <td>
                        LazyPurple's
                    </td>
                </tr><tr>
                    <td>
                        9
                    </td>
                    <td>
                        Uncletopia
                    </td>
                </tr><tr>
                    <td>
                        10
                    </td>
                    <td>
                        BlackWonder
                    </td>
                </tr><tr>
                    <td>
                        11
                    </td>
                    <td>
                        FirePowered Gaming
                    </td>
                </tr><tr>
                    <td>
                        12
                    </td>
                    <td>
                        Flux.tf
                    </td>
                </tr><tr>
                    <td>
                        13
                    </td>
                    <td>
                        dpg.tf
                    </td>
                </tr><tr>
                    <td>
                        14
                    </td>
                    <td>
                        GFLClan.com
                    </td>
                </tr><tr>
                    <td>
                        49
                    </td>
                    <td>
                        Tacobot
                    </td>
                </tr><tr>
                    <td>
                        50
                    </td>
                    <td>
                        TF2BD
                    </td>
                </tr><tr>
                    <td>
                        51
                    </td>
                    <td>
                        Sleepy's Lists
                    </td>
                </tr><tr>
                    <td>
                        52
                    </td>
                    <td>
                        minein4 S***List
                    </td>
                </tr><tr>
                    <td>
                        53
                    </td>
                    <td>
                        Uncletopia list
                    </td>
                </tr><tr>
                    <td>
                        54
                    </td>
                    <td>
                        H0xton1337 NaughtyList
                    </td>
                </tr>
            </tbody>
            <h3>
                ban_types
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(13)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Vac Ban
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        Game ban
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        Community ban
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Trade ban
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Source ban
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Database mark
                    </td>
                </tr>
            </tbody>
            <h3>
                ban_reasons
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        reason[varchar(100)]
                    </th>
                </tr>
            </thead>
            <h3>
                offences
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(32)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Cheating
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        Ommiting Ban
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        Tampering with server
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Griefing
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Offensive speech
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Tampering with client
                    </td>
                </tr><tr>
                    <td>
                        10
                    </td>
                    <td>
                        Abuse of status
                    </td>
                </tr><tr>
                    <td>
                        11
                    </td>
                    <td>
                        Abuse of ToS
                    </td>
                </tr><tr>
                    <td>
                        19
                    </td>
                    <td>
                        Being a gooner
                    </td>
                </tr><tr>
                    <td>
                        20
                    </td>
                    <td>
                        Unknown
                    </td>
                </tr>
            </tbody>
            <h3>
                match_fate_data
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int] [ident]
                    </th>
                    <th>
                        account_id [int]
                    </th>
                    <th>
                        fate_id [int]
                    </th>
                    <th>
                        initiator_id [int]
                    </th>
                </tr>
            </thead>
            <h3>
                fate
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        fate [varchar(20)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        stayed
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        left
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        attempted
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        kicked
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        banned
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        permanently banned
                    </td>
                </tr>
            </tbody>
            <h3>
                kick_initiator
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        initiator [varchar(20)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        anti-cheat
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        server
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        myself
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        3rd party
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        other team
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        none
                    </td>
                </tr><tr>
                    <td>
                        7
                    </td>
                    <td>
                        unknown
                    </td>
                </tr>
            </tbody>
            <h3>
                suspect_data
            </h3>
            <thead>
                <tr>
                    <th>
                        account_id [PK] [int]
                    </th>
                    <th>
                        unique_sh_view_count [int]
                    </th>
                    <th>
                        hour_count [int]
                    </th>
                    <th>
                        is_f2p [bool]
                    </th>
                    <th>
                        is_profile_setup_done [bool]
                    </th>
                    <th>
                        has_all_achievements [bool]
                    </th>
                    <th>
                        is_affiliated [bool]
                    </th>
                </tr>
            </thead>
            <h3>
                toxicity_evidence
            </h3>
            <thead>
                <tr>
                    <th>
                        account_id [PK] [int]
                    </th>
                    <th>
                        toxicity_type_id [PK] [int]
                    </th>
                </tr>
            </thead>
            <h3>
                toxicity_types
            </h3>
            <thead>
                <tr>
                    <th>
                        id [PK] [int]
                    </th>
                    <th>
                        type [varchar(32)]
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Lack of consideration
                    </td>
                </tr><tr>
                    <td>
                        2
                    </td>
                    <td>
                        Common words
                    </td>
                </tr><tr>
                    <td>
                        3
                    </td>
                    <td>
                        Insults
                    </td>
                </tr><tr>
                    <td>
                        4
                    </td>
                    <td>
                        Beliefs
                    </td>
                </tr><tr>
                    <td>
                        5
                    </td>
                    <td>
                        Reverse votekick
                    </td>
                </tr><tr>
                    <td>
                        6
                    </td>
                    <td>
                        Objector hell
                    </td>
                </tr><tr>
                    <td>
                        7
                    </td>
                    <td>
                        Taunting after each kill
                    </td>
                </tr><tr>
                    <td>
                        8
                    </td>
                    <td>
                        Game abuse
                    </td>
                </tr><tr>
                    <td>
                        9
                    </td>
                    <td>
                        Griefing
                    </td>
                </tr><tr>
                    <td>
                        10
                    </td>
                    <td>
                        Trolling
                    </td>
                </tr><tr>
                    <td>
                        11
                    </td>
                    <td>
                        Tryharding
                    </td>
                </tr><tr>
                    <td>
                        12
                    </td>
                    <td>
                        Spawn camping
                    </td>
                </tr><tr>
                    <td>
                        13
                    </td>
                    <td>
                        Promotion
                    </td>
                </tr><tr>
                    <td>
                        14
                    </td>
                    <td>
                        Affiliation
                    </td>
                </tr><tr>
                    <td>
                        15
                    </td>
                    <td>
                        Cheating
                    </td>
                </tr><tr>
                    <td>
                        16
                    </td>
                    <td>
                        Harassment
                    </td>
                </tr><tr>
                    <td>
                        17
                    </td>
                    <td>
                        Cyberbullying
                    </td>
                </tr><tr>
                    <td>
                        18
                    </td>
                    <td>
                        Literally Crime
                    </td>
                </tr><tr>
                    <td>
                        19
                    </td>
                    <td>
                        Spreading False Information
                    </td>
                </tr><tr>
                    <td>
                        20
                    </td>
                    <td>
                        Steam Profile
                    </td>
                </tr><tr>
                    <td>
                        21
                    </td>
                    <td>
                        Past Names
                    </td>
                </tr><tr>
                    <td>
                        22
                    </td>
                    <td>
                        Past Profile Pictures
                    </td>
                </tr>
            </tbody>
        </main>
    )
}