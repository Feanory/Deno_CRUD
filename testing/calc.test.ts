import { sub, sum } from './calc.ts'
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts';


Deno.test('Sum function', () => {
    const result = sum(41, 1);

    assertEquals(result, 42)
})

Deno.test('Sum function', () => {
    const result = sub(43, 1);

    assertEquals(result, 42)
})