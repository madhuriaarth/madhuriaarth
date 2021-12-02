import { render, screen, waitFor } from '@testing-library/react';
import Listusers from '../user-api/listusers'

describe('users' , () => {
//  test('it displays a list of users',  () => {
 test('it displays a list of uers', async () => {
   render( <Listusers/>);

   
    const userName = await screen.findByText('Leanne Graham', 'Bret', 58804-1099)
   expect(userName).toBeInTheDocument();
    // expect(screen.getByTestId('userlist')).toBeInTheDocument()
  //  const Listuser = screen.getAllByTestId('listusers');
  //  expect(Listuser).toBeInTheDocument();

  // const userName = 'Leanne Graham';
  // expect(userName).toBe('Leanne Graham')
 
//   const Listuser = await fetch();
//   expect (Listuser).toBe('Leanne Graham')
//  })
 });

 });
