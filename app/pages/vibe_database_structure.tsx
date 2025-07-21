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
                    <td>
                        2
                    </td>
                    <td>
                        Suspect
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        Cheater
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        An F2p
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        Has Vac ban(s)
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Has Source ban(s)
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Has game ban(s)
                    </td>
                    <td>
                        6
                    </td>
                    <td>
                        Low hour count
                    </td>
                    <td>
                        7
                    </td>
                    <td>
                        High sh unique views
                    </td>
                    <td>
                        8
                    </td>
                    <td>
                        Private profile
                    </td>
                    <td>
                        9
                    </td>
                    <td>
                        Suspicious nickname
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        All Achievements
                    </td>
                    <td>
                        11
                    </td>
                    <td>
                        Top scoring
                    </td>
                    <td>
                        12
                    </td>
                    <td>
                        Point deviation growth
                    </td>
                    <td>
                        13
                    </td>
                    <td>
                        Substantial point advantage
                    </td>
                    <td>
                        14
                    </td>
                    <td>
                        Kill feed information
                    </td>
                    <td>
                        15
                    </td>
                    <td>
                        Scoreboard information
                    </td>
                    <td>
                        16
                    </td>
                    <td>
                        People's claims
                    </td>
                    <td>
                        17
                    </td>
                    <td>
                        Talks only with team chat
                    </td>
                    <td>
                        18
                    </td>
                    <td>
                        Talks only when being kicked
                    </td>
                    <td>
                        19
                    </td>
                    <td>
                        Verbally Toxic
                    </td>
                    <td>
                        20
                    </td>
                    <td>
                        Non-Verbally Toxic
                    </td>
                    <td>
                        21
                    </td>
                    <td>
                        Outside of the game Toxic
                    </td>
                    <td>
                        22
                    </td>
                    <td>
                        Model twitching
                    </td>
                    <td>
                        23
                    </td>
                    <td>
                        Model snapping
                    </td>
                    <td>
                        24
                    </td>
                    <td>
                        Increased luck
                    </td>
                    <td>
                        25
                    </td>
                    <td>
                        Scoreboard-status shenanigans
                    </td>
                    <td>
                        26
                    </td>
                    <td>
                        Bot-like behaviour
                    </td>
                    <td>
                        27
                    </td>
                    <td>
                        Cross-hair superposition
                    </td>
                    <td>
                        28
                    </td>
                    <td>
                        Double flicking
                    </td>
                    <td>
                        29
                    </td>
                    <td>
                        Accidental kill
                    </td>
                    <td>
                        30
                    </td>
                    <td>
                        Prediction of a random movement
                    </td>
                    <td>
                        31
                    </td>
                    <td>
                        The bot peek of death
                    </td>
                    <td>
                        32
                    </td>
                    <td>
                        Shoots at the funny spots
                    </td>
                    <td>
                        33
                    </td>
                    <td>
                        Child
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        Demo file
                    </td>
                    <td>
                        35
                    </td>
                    <td>
                        Eyes.
                    </td>
                    <td>
                        36
                    </td>
                    <td>
                        Multiple bans
                    </td>
                    <td>
                        37
                    </td>
                    <td>
                        Cheater team :D!
                    </td>
                    <td>
                        38
                    </td>
                    <td>
                        Profile URL
                    </td>
                    <td>
                        39
                    </td>
                    <td>
                        Wallhack to Wallhack scene
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        Toxic
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        Delusional
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Considerate
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Cool dude
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        Triggerbot
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        ESP
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Crit Bucket
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Spinbot
                    </td>
                    <td>
                        6
                    </td>
                    <td>
                        Fake latency
                    </td>
                    <td>
                        7
                    </td>
                    <td>
                        Ping reducer
                    </td>
                    <td>
                        8
                    </td>
                    <td>
                        Fake lag
                    </td>
                    <td>
                        9
                    </td>
                    <td>
                        Anti-backstab
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        Auto-backstab
                    </td>
                    <td>
                        11
                    </td>
                    <td>
                        Auto-reflect
                    </td>
                    <td>
                        12
                    </td>
                    <td>
                        Auto-strafer
                    </td>
                    <td>
                        13
                    </td>
                    <td>
                        Speedhack
                    </td>
                    <td>
                        14
                    </td>
                    <td>
                        No push
                    </td>
                    <td>
                        15
                    </td>
                    <td>
                        No recoil
                    </td>
                    <td>
                        16
                    </td>
                    <td>
                        Skin changer
                    </td>
                    <td>
                        17
                    </td>
                    <td>
                        LMAOBOX
                    </td>
                    <td>
                        18
                    </td>
                    <td>
                        Nullcore
                    </td>
                    <td>
                        19
                    </td>
                    <td>
                        Rijin
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        Valve
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        EasyAntiCheat
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Unknown
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Panda-Community.com
                    </td>
                    <td>
                        6
                    </td>
                    <td>
                        Skial.com
                    </td>
                    <td>
                        7
                    </td>
                    <td>
                        UGC.TF
                    </td>
                    <td>
                        8
                    </td>
                    <td>
                        LazyPurple's
                    </td>
                    <td>
                        9
                    </td>
                    <td>
                        Uncletopia
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        BlackWonder
                    </td>
                    <td>
                        11
                    </td>
                    <td>
                        FirePowered Gaming
                    </td>
                    <td>
                        12
                    </td>
                    <td>
                        Flux.tf
                    </td>
                    <td>
                        13
                    </td>
                    <td>
                        dpg.tf
                    </td>
                    <td>
                        14
                    </td>
                    <td>
                        GFLClan.com
                    </td>
                    <td>
                        49
                    </td>
                    <td>
                        Tacobot
                    </td>
                    <td>
                        50
                    </td>
                    <td>
                        TF2BD
                    </td>
                    <td>
                        51
                    </td>
                    <td>
                        Sleepy's Lists
                    </td>
                    <td>
                        52
                    </td>
                    <td>
                        minein4 S***List
                    </td>
                    <td>
                        53
                    </td>
                    <td>
                        Uncletopia list
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        Game ban
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        Community ban
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Trade ban
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Source ban
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        Ommiting Ban
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        Tampering with server
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Griefing
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Offensive speech
                    </td>
                    <td>
                        6
                    </td>
                    <td>
                        Tampering with client
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        Abuse of status
                    </td>
                    <td>
                        11
                    </td>
                    <td>
                        Abuse of ToS
                    </td>
                    <td>
                        19
                    </td>
                    <td>
                        Being a gooner
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        left
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        attempted
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        kicked
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        banned
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        server
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        myself
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        3rd party
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        other team
                    </td>
                    <td>
                        6
                    </td>
                    <td>
                        none
                    </td>
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
                    <td>
                        2
                    </td>
                    <td>
                        Common words
                    </td>
                    <td>
                        3
                    </td>
                    <td>
                        Insults
                    </td>
                    <td>
                        4
                    </td>
                    <td>
                        Beliefs
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        Reverse votekick
                    </td>
                    <td>
                        6
                    </td>
                    <td>
                        Objector hell
                    </td>
                    <td>
                        7
                    </td>
                    <td>
                        Taunting after each kill
                    </td>
                    <td>
                        8
                    </td>
                    <td>
                        Game abuse
                    </td>
                    <td>
                        9
                    </td>
                    <td>
                        Griefing
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        Trolling
                    </td>
                    <td>
                        11
                    </td>
                    <td>
                        Tryharding
                    </td>
                    <td>
                        12
                    </td>
                    <td>
                        Spawn camping
                    </td>
                    <td>
                        13
                    </td>
                    <td>
                        Promotion
                    </td>
                    <td>
                        14
                    </td>
                    <td>
                        Affiliation
                    </td>
                    <td>
                        15
                    </td>
                    <td>
                        Cheating
                    </td>
                    <td>
                        16
                    </td>
                    <td>
                        Harassment
                    </td>
                    <td>
                        17
                    </td>
                    <td>
                        Cyberbullying
                    </td>
                    <td>
                        18
                    </td>
                    <td>
                        Literally Crime
                    </td>
                    <td>
                        19
                    </td>
                    <td>
                        Spreading False Information
                    </td>
                    <td>
                        20
                    </td>
                    <td>
                        Steam Profile
                    </td>
                    <td>
                        21
                    </td>
                    <td>
                        Past Names
                    </td>
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