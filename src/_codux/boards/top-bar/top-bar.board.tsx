import { createBoard } from '@wixc3/react-board';
import { TopBar } from '../../../components/pages/top-bar/top-bar';
import type { ApiUser } from '../../../shared/model/api-user';

const JohnDoe: ApiUser = {
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    bio: 'Some bio information',
    username: 'jane-doe',
    location: 'USA',
    name: 'Jane Doe',
    email: 'jane@doe.com',
    followers: 19,
    following: 20,
    twitter: '',
    url: '',
    organization: '',
    organizations: [],
    techs: {
        technologies: ['js', 'node', 'react', 'python'],
    },
};

export default createBoard({
    name: 'Top Bar',
    Board: () => <TopBar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 452,
        windowWidth: 1352,
    },
});
