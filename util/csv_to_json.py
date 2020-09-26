#!/usr/bin/env python
# coding=utf-8

# CSV to JSON converter
import csv
import json
import re

# Input & output file names
input_csv_fname = "../src/dict_files/toli.query.mn_20150426132043.csv"
output_json_fname = "../src/dict_files/mongolian_dict.json"

# HTML tag remover function
tag_remover = re.compile(r'<[^>]+>')
def remove_tags(text):
    return tag_remover.sub('', text)

# ... open and process CSV file
line_list_raw = []
text_file = open(input_csv_fname, 'r')
for line in text_file:
    line_list_raw.append(line)

line_list_clean = []
for line in line_list_raw:
    ind1 = line.find('<')
    ind2 = line.rfind('>')
    split_line = []
    split_line.append(line[0:ind1].strip())
    split_line.append(remove_tags(line[ind1:ind2+1]).strip().replace("&quot;","'"))
    split_line.append(line[ind2+1:].strip())
    line_list_clean.append(split_line)
line_list_raw = []

alphabet_cyr = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "ө", "п", "р", "с", "т", "у", "ү", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ы", "э", "ю", "я"];
alphabet_lat = ["a", "b", "v", "g", "d", "ye", "yo", "j", "z", "i", "i", "k", "l", "m", "n", "o", "u", "p", "r", "s", "t", "u", "u", "f", "h", "ts", "ch", "sh", "", "", "i", "ii", "e", "yu", "ya"];
lat2cyr = {}
cyr2lat = {}

for i in range(35):
    lat2cyr[alphabet_lat[i]] = alphabet_cyr[i]
    cyr2lat[alphabet_cyr[i]] = alphabet_lat[i]

def convert2lat(word):
    return "".join([cyr2lat[c] if (c in cyr2lat) else "" for c in word])
def convert2cyr(word):
    return "".join([lat2cyr[c] if (c in lat2cyr) else "" for c in word])

# ... create Python dictionary containing the data and then convert that to JSON
mongolian_dict = {'dict' : []}
for sline in line_list_clean:
    item = {}
    tmp = sline[0].split(' ')
    if len(tmp)>1:
        tmp = tmp[0] + " (" + tmp[1] + ")" 
    else:
        tmp = tmp[0]
    item['cyrillic'] = tmp
    item['latin_direct'] = convert2lat(tmp)
    item['description'] = sline[1]
    tmp = sline[2].split('\t')
    item['written'] = tmp[0]
    if len(tmp)>1:
        item['phonetic transcription'] = tmp[1]
    else:
        item['phonetic transcription'] = ''
    mongolian_dict['dict'].append(item)

with open(output_json_fname, 'w', encoding='utf-8') as file:
    json.dump(mongolian_dict, file, ensure_ascii=False, indent=4)

