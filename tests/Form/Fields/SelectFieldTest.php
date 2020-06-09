<?php

namespace Kirby\Form\Fields;

class SelectFieldTest extends TestCase
{
    public function testDefaultProps()
    {
        $field = $this->field('select');

        $this->assertEquals('select', $field->type());
        $this->assertEquals('select', $field->name());
        $this->assertEquals(null, $field->value());
        $this->assertEquals(null, $field->icon());
        $this->assertEquals([], $field->options());
        $this->assertTrue($field->save());
    }

    public function valueInputProvider()
    {
        return [
            ['a', 'a'],
            ['b', 'b'],
            ['c', 'c'],
            ['d', '']
        ];
    }

    /**
     * @dataProvider valueInputProvider
     */
    public function testValue($input, $expected)
    {
        $field = $this->field('select', [
            'options' => [
                ['value' => 'a', 'text' => 'a'],
                ['value' => 'b', 'text' => 'b'],
                ['value' => 'c', 'text' => 'c']
            ],
            'value' => $input
        ]);

        $this->assertSame($expected, $field->value());
    }
}
