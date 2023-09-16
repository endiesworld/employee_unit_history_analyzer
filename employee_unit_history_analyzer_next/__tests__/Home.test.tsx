import {render, screen} from '@testing-library/react'
import Home  from '@/app/page'
import { experimental_useEffectEvent } from 'react'

describe('Home', () => {

    it('renders the component without errors', () => {
        const { getByText } = render(<Home />);
        const uploadText = getByText('Upload Excel File');
        expect(uploadText).toBeInTheDocument();
    });

    
})
