import json
import boto3

def lambda_handler(event, context):
    # TODO implement
    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('muckitymuckresumecounter')

    response = table.get_item(Key={'Site': 0})
    #print(response)
    
    item = response['Item']
    print(item)
    
    
    return {
        
    }
    #print(table.creation_date_time)
    
    #return {
    #    'statusCode': 200,
    #    'body': json.dumps('Hello from Lambda!'),
    #}
