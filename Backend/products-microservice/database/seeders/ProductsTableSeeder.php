<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Dog Standing Bronze',
            'description' => 'Common bronze alloys have the unusual and desirable property of expanding slightly just before they set, thus filling the finest details of a mould. Then, as the bronze cools, it shrinks a little, making it easier to separate from the mould.',
            'price' => 100000,
            'stock' => 10,
            'image' => 'Dog_Standing_Bronze.jpg',
            'status' => 'Available',
            'category' => 'Sculpture',
        ]);
        Product::create([
            'name' => 'Golden Buddha Statue',
            'description' => 'A relatively rare element, gold is a precious metal that has been used for coinage, jewelry, and other arts throughout recorded history. In the past, a gold standard was often implemented as a monetary policy.',
            'price' => 125000,
            'stock' => 5,
            'image' => 'Golden_Buddha_Statue.jpg',
            'status' => 'Available',
            'category' => 'Sculpture',
        ]);
        Product::create([
            'name' => 'Gordian Knot Wood',
            'description' => 'Wood carving is a form of woodworking by means of a cutting tool (knife) in one hand or a chisel by two hands or with one hand on a chisel and one hand on a mallet, resulting in a wooden figure or figurine, or in the sculptural ornamentation of a wooden object.',
            'price' => 12000,
            'stock' => 8,
            'image' => 'Gordian_Knot_Wood.jpg',
            'status' => 'Available',
            'category' => 'Sculpture',
        ]);
        Product::create([
            'name' => 'Greek God Marble',
            'description' => 'Marble is a metamorphic rock composed of recrystallized carbonate minerals, most commonly calcite or dolomite. Marble may be foliated. In geology the term “marble” refers to metamorphosed limestone, but its use in stonemasonry more broadly encompasses unmetamorphosed limestone.',
            'price' => 36800,
            'stock' => 3,
            'image' => 'Greek_God_Marble.jpg',
            'status' => 'Available',
            'category' => 'Sculpture',
        ]);
        Product::create([
            'name' => 'Japanese Geisha Ceramic',
            'description' => 'A ceramic material is an inorganic, non-metallic, often crystalline oxide, nitride or carbide material. Some elements, such as carbon or silicon, may be considered ceramics. Ceramic materials are brittle, hard, strong in compression, weak in shearing and tension.',
            'price' => 11600,
            'stock' => 0,
            'image' => 'Japanese_Geisha_Ceramic.jpg',
            'status' => 'Out of Stock',
            'category' => 'Ceramic',
        ]);
        Product::create([
            'name' => 'Man Bronze Statue',
            'description' => 'Common bronze alloys have the unusual and desirable property of expanding slightly just before they set, thus filling the finest details of a mould. Then, as the bronze cools, it shrinks a little, making it easier to separate from the mould.',
            'price' => 15900,
            'stock' => 17,
            'image' => 'Man_Bronze_Statue.jpg',
            'status' => 'Available',
            'category' => 'Sculpture',
        ]);
        Product::create([
            'name' => 'Morning Dew Bronze',
            'description' => 'Common bronze alloys have the unusual and desirable property of expanding slightly just before they set, thus filling the finest details of a mould. Then, as the bronze cools, it shrinks a little, making it easier to separate from the mould.',
            'price' => 45800,
            'stock' => 0,
            'image' => 'Morning_Dew_Bronze.jpg',
            'status' => 'Out of Stock',
            'category' => 'Sculpture',
        ]);

        //
    }
}
