import { h2Styles } from '../lib/styles';
import { teamMemberData } from '../data/team-data';
import TeamCard from '../Components/TeamCard';

export default function Team({}){
    return(
        <div className='mt-6 md:mt-10 lg:mt-14'>
            <h2 className={h2Styles}>Meet Our Team</h2>

            <div className='flex flex-wrap gap-2.5 justify-center mt-6 lg:mt-9'>
                {teamMemberData.map((team) => <TeamCard key={`${team.teamMemberName}-team-member`} data={team} />)}
            </div>
        </div>
    )
}